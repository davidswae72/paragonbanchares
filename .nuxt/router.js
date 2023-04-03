import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26f9f626 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5f73241a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _b35c77d6 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _4b5b5c00 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _9a15c4e4 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _71f4aded = () => interopDefault(import('..\\pages\\faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _12c5cd99 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _f35db0a2 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _35b22598 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _0b5649d2 = () => interopDefault(import('..\\pages\\admin\\ims\\index.vue' /* webpackChunkName: "pages/admin/ims/index" */))
const _65575e24 = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _1a5f2a46 = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _50569b30 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _08dfd4d9 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _1e513c39 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _1dc8a1b6 = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _43049bf9 = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _3a2b8ee8 = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _0c209e62 = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _7877dc1e = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _ee971ace = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _7fb1c77a = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _68b0331d = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _22d6c34e = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _60b4d96a = () => interopDefault(import('..\\pages\\personal-banking\\credit-card.vue' /* webpackChunkName: "pages/personal-banking/credit-card" */))
const _5cfecdc0 = () => interopDefault(import('..\\pages\\personal-banking\\current-account.vue' /* webpackChunkName: "pages/personal-banking/current-account" */))
const _3395e37e = () => interopDefault(import('..\\pages\\personal-banking\\mortgages.vue' /* webpackChunkName: "pages/personal-banking/mortgages" */))
const _21662114 = () => interopDefault(import('..\\pages\\personal-banking\\personal-insurance.vue' /* webpackChunkName: "pages/personal-banking/personal-insurance" */))
const _3a081a04 = () => interopDefault(import('..\\pages\\personal-banking\\personal-loan.vue' /* webpackChunkName: "pages/personal-banking/personal-loan" */))
const _3de91d00 = () => interopDefault(import('..\\pages\\personal-banking\\savings-account.vue' /* webpackChunkName: "pages/personal-banking/savings-account" */))
const _18f10be1 = () => interopDefault(import('..\\pages\\private-banking\\banking-services.vue' /* webpackChunkName: "pages/private-banking/banking-services" */))
const _10f00164 = () => interopDefault(import('..\\pages\\private-banking\\insurance.vue' /* webpackChunkName: "pages/private-banking/insurance" */))
const _7db35c76 = () => interopDefault(import('..\\pages\\private-banking\\offshore-migrants.vue' /* webpackChunkName: "pages/private-banking/offshore-migrants" */))
const _0c3adfb2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _26f9f626,
    name: "about"
  }, {
    path: "/admin",
    component: _5f73241a,
    name: "admin"
  }, {
    path: "/careers",
    component: _b35c77d6,
    name: "careers"
  }, {
    path: "/contact",
    component: _4b5b5c00,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _9a15c4e4,
    name: "dashboard"
  }, {
    path: "/faqs",
    component: _71f4aded,
    name: "faqs"
  }, {
    path: "/login",
    component: _12c5cd99,
    name: "login"
  }, {
    path: "/register",
    component: _f35db0a2,
    name: "register"
  }, {
    path: "/admin/account",
    component: _35b22598,
    name: "admin-account"
  }, {
    path: "/admin/ims",
    component: _0b5649d2,
    name: "admin-ims"
  }, {
    path: "/admin/loans",
    component: _65575e24,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _1a5f2a46,
    name: "admin-loans.vue"
  }, {
    path: "/admin/settings",
    component: _50569b30,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _08dfd4d9,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _1e513c39,
    name: "admin-users"
  }, {
    path: "/admin/victims",
    component: _1dc8a1b6,
    name: "admin-victims"
  }, {
    path: "/dashboard/account",
    component: _43049bf9,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _3a2b8ee8,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _0c209e62,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _7877dc1e,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/transactions",
    component: _ee971ace,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _7fb1c77a,
    name: "dashboard-transfer"
  }, {
    path: "/password/new",
    component: _68b0331d,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _22d6c34e,
    name: "password-reset"
  }, {
    path: "/personal-banking/credit-card",
    component: _60b4d96a,
    name: "personal-banking-credit-card"
  }, {
    path: "/personal-banking/current-account",
    component: _5cfecdc0,
    name: "personal-banking-current-account"
  }, {
    path: "/personal-banking/mortgages",
    component: _3395e37e,
    name: "personal-banking-mortgages"
  }, {
    path: "/personal-banking/personal-insurance",
    component: _21662114,
    name: "personal-banking-personal-insurance"
  }, {
    path: "/personal-banking/personal-loan",
    component: _3a081a04,
    name: "personal-banking-personal-loan"
  }, {
    path: "/personal-banking/savings-account",
    component: _3de91d00,
    name: "personal-banking-savings-account"
  }, {
    path: "/private-banking/banking-services",
    component: _18f10be1,
    name: "private-banking-banking-services"
  }, {
    path: "/private-banking/insurance",
    component: _10f00164,
    name: "private-banking-insurance"
  }, {
    path: "/private-banking/offshore-migrants",
    component: _7db35c76,
    name: "private-banking-offshore-migrants"
  }, {
    path: "/",
    component: _0c3adfb2,
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
