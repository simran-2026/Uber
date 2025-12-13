const mongoose = require('mongoose');

const BlacklistTokenSchema = new mongoose.Schema({
	token: { 
        type: String,
         required: true,
        unique: true,
         index: true },
	createdAt: { 
        type: Date, 
        default: Date.now, 
        index: true }
});

// TTL index: expire documents 24 hours (86400 seconds) after `createdAt`
BlacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 });

module.exports = mongoose.model('BlacklistToken', BlacklistTokenSchema);

