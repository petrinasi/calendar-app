'use strict';

angular.module('calendar_app.version', [
  'calendar_app.version.interpolate-filter',
  'calendar_app.version.version-directive'
])

.value('version', '0.1');
