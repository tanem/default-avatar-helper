import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import sourcemaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const CJS_DEV = 'CJS_DEV'
const CJS_PROD = 'CJS_PROD'
const ES = 'ES'
const UMD_DEV = 'UMD_DEV'
const UMD_PROD = 'UMD_PROD'

const input = './compiled/index.js'

const makeExternalPredicate = () => {
  const externals = Object.keys(pkg.dependencies)
  const pattern = new RegExp(`^(${externals.join('|')})($|/)`)
  return (id) => pattern.test(id)
}

const isProduction = (bundleType) =>
  bundleType === CJS_PROD || bundleType === UMD_PROD

const getPlugins = (bundleType) => [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    presets: [['@babel/env', { loose: true, modules: false }]],
    plugins: ['@babel/transform-runtime', 'lodash'],
    runtimeHelpers: true,
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      isProduction(bundleType) ? 'production' : 'development'
    ),
  }),
  sourcemaps(),
  isProduction(bundleType) &&
    /* eslint-disable @typescript-eslint/camelcase */
    terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        keep_infinity: true,
        passes: 10,
        pure_getters: true,
      },
      warnings: true,
      ecma: 5,
      toplevel: bundleType === CJS_DEV || bundleType === CJS_PROD,
    }),
  /* eslint-enable @typescript-eslint/camelcase */
]

const getCjsConfig = (bundleType) => ({
  input,
  external: makeExternalPredicate(),
  output: {
    file: `dist/default-avatar-helper.cjs.${
      isProduction(bundleType) ? 'production' : 'development'
    }.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: getPlugins(bundleType),
})

const getEsConfig = () => ({
  input,
  external: makeExternalPredicate(),
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  },
  plugins: getPlugins(ES),
})

const getUmdConfig = (bundleType) => ({
  input,
  output: {
    file: `dist/default-avatar-helper.umd.${
      isProduction(bundleType) ? 'production' : 'development'
    }.js`,
    format: 'umd',
    name: 'DefaultAvatarHelper',
    sourcemap: true,
  },
  plugins: getPlugins(bundleType),
})

export default [
  getCjsConfig(CJS_DEV),
  getCjsConfig(CJS_PROD),
  getEsConfig(),
  getUmdConfig(UMD_DEV),
  getUmdConfig(UMD_PROD),
]
