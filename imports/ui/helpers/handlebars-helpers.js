import { Template } from "meteor/templating"

import { isModerator } from '/imports/api/user/methods'

Template.registerHelper('SubsCacheReady', () => Object.keys(SubsCache.cache).map(x => SubsCache.cache[x].ready()).reduce((x1, x2) => x1 && x2, true))

Template.registerHelper('isTeamMember', () => (((Meteor.users.findOne({
	_id: Meteor.userId()
}) || {}).profile || {}).team || {}).member)

Template.registerHelper('isModerator', () => isModerator(Meteor.userId()))

