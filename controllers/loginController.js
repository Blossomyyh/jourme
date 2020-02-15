var mongoose = require("mongoose");

import { UserSchema } from '../../src/models/userModel'
var User = new mongoose.model('User',UserSchema);

