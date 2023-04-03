import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _30bb413b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4a2e5de5 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _8527b63a = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _1d269a64 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _169fc480 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _7286a042 = () => interopDefault(import('..\\pages\\faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _e6a484ea = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _47c64b06 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _1d28cd82 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _1d008120 = () => interopDefault(import('..\\pages\\admin\\ims\\index.vue' /* webpackChunkName: "pages/admin/ims/index" */))
const _418163d4 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _596a2f14 = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _1890c4a2 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _47ead9a7 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _6e4ad807 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _55ca8204 = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _293cb572 = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _3aeecf94 = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _7bac4b7e = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _40b20590 = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _732f0a0b = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _236b3cb5 = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _17ea110f = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _29de2680 = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _f6bd74ce = () => interopDefault(import('..\\pages\\personal-banking\\credit-card.vue' /* webpackChunkName: "pages/personal-banking/credit-card" */))
const _25c6ade4 = () => interopDefault(import('..\\pages\\personal-banking\\current-account.vue' /* webpackChunkName: "pages/personal-banking/current-account" */))
const _38d5d14c = () => interopDefault(import('..\\pages\\personal-banking\\mortgages.vue' /* webpackChunkName: "pages/personal-banking/mortgages" */))
const _1c7ead30 = () => interopDefault(import('..\\pages\\personal-banking\\personal-insurance.vue' /* webpackChunkName: "pages/personal-banking/personal-insurance" */))
const _c23f1e5c = () => interopDefault(import('..\\pages\\personal-banking\\personal-loan.vue' /* webpackChunkName: "pages/personal-banking/personal-loan" */))
const _63f20f64 = () => interopDefault(import('..\\pages\\personal-banking\\savings-account.vue' /* webpackChunkName: "pages/personal-banking/savings-account" */))
const _ade231a2 = () => interopDefault(import('..\\pages\\private-banking\\banking-services.vue' /* webpackChunkName: "pages/private-banking/banking-services" */))
const _5acc1fc0 = () => interopDefault(import('..\\pages\\private-banking\\insurance.vue' /* webpackChunkName: "pages/private-banking/insurance" */))
const _1d5e2a30 = () => interopDefault(import('..\\pages\\private-banking\\offshore-migrants.vue' /* webpackChunkName: "pages/private-banking/offshore-migrants" */))
const _50731c00 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _30bb413b,
    name: "about"
  }, {
    path: "/admin",
    component: _4a2e5de5,
    name: "admin"
  }, {
    path: "/careers",
    component: _8527b63a,
    name: "careers"
  }, {
    path: "/contact",
    component: _1d269a64,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _169fc480,
    name: "dashboard"
  }, {
    path: "/faqs",
    component: _7286a042,
    name: "faqs"
  }, {
    path: "/login",
    component: _e6a484ea,
    name: "login"
  }, {
    path: "/register",
    component: _47c64b06,
    name: "register"
  }, {
    path: "/admin/account",
    component: _1d28cd82,
    name: "admin-account"
  }, {
    path: "/admin/ims",
    component: _1d008120,
    name: "admin-ims"
  }, {
    path: "/admin/loans",
    component: _418163d4,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _596a2f14,
    name: "admin-loans.vue"
  }, {
    path: "/admin/settings",
    component: _1890c4a2,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _47ead9a7,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _6e4ad807,
    name: "admin-users"
  }, {
    path: "/admin/victims",
    component: _55ca8204,
    name: "admin-victims"
  }, {
    path: "/dashboard/account",
    component: _293cb572,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _3aeecf94,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _7bac4b7e,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _40b20590,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/transactions",
    component: _732f0a0b,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _236b3cb5,
    name: "dashboard-transfer"
  }, {
    path: "/password/new",
    component: _17ea110f,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _29de2680,
    name: "password-reset"
  }, {
    path: "/personal-banking/credit-card",
    component: _f6bd74ce,
    name: "personal-banking-credit-card"
  }, {
    path: "/personal-banking/current-account",
    component: _25c6ade4,
    name: "personal-banking-current-account"
  }, {
    path: "/personal-banking/mortgages",
    component: _38d5d14c,
    name: "personal-banking-mortgages"
  }, {
    path: "/personal-banking/personal-insurance",
    component: _1c7ead30,
    name: "personal-banking-personal-insurance"
  }, {
    path: "/personal-banking/personal-loan",
    component: _c23f1e5c,
    name: "personal-banking-personal-loan"
  }, {
    path: "/personal-banking/savings-account",
    component: _63f20f64,
    name: "personal-banking-savings-account"
  }, {
    path: "/private-banking/banking-services",
    component: _ade231a2,
    name: "private-banking-banking-services"
  }, {
    path: "/private-banking/insurance",
    component: _5acc1fc0,
    name: "private-banking-insurance"
  }, {
    path: "/private-banking/offshore-migrants",
    component: _1d5e2a30,
    name: "private-banking-offshore-migrants"
  }, {
    path: "/",
    component: _50731c00,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
