import { Mongo } from 'meteor/mongo'

export const FormProgress = new Mongo.Collection('formProgress')

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('formProgress', function (formTypeID) {
        return FormProgress.find({ 'form_type_id' : formTypeID });
    });
}