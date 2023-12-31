const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
        unique: false
    },
},{ timestamps : true });

// Use instance.save() when modifying a user's password
// to trigger this pre-hook
UserSchema.pre(
	'save',
	async function (next) {
	  const user = this;
	  // If password wasn't changed to plaintext, skip to next function.
	  if (!user.isModified('password')) return next();
	  // If password was changed, assume it was changed to plaintext and hash it.
	  const hash = await bcrypt.hash(this.password, 10);
	  this.password = hash;
	  next();
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}