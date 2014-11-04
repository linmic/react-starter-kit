###
  Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
  Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
###
'use strict'

_ = require('lodash')
React = require('react')
{Router} = require('director')
AppDispatcher = require('./AppDispatcher')
ActionTypes = require('./constants/ActionTypes')
require './cjsx-test'

# Export React so the dev tools can find it
(if window is window.top then window.top else window).React = React

###
  Check if Page component has a layout property; and if yes, wrap the page
  into the specified layout, then mount to document.body.
###

render = (page) ->
  child = null
  props = {}

  while page.defaultProps and page.defaultProps.layout
    child = React.createElement(page, props, child)
    _.extend(props, page.defaultProps)
    page = page.defaultProps.layout

  React.render(React.createElement(page, props, child), document.body)
  document.title = props.title

# Define URL routes
# See https://github.com/flatiron/director
routes = {
  '/': () => render(require('./pages/Index.jsx')),
  '/privacy': () => render(require('./pages/Privacy.jsx'))
}

# Initialize a router
router = new Router(routes).configure({html5history: true}).init()

AppDispatcher.register((payload) =>

  action = payload.action

  if action.actionType is ActionTypes.SET_CURRENT_ROUTE
    router.setRoute(action.route)

  # No errors.  Needed by promise in Dispatcher.
)
