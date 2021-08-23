module.exports = (sequelize, Sequelize) => {
	const Device = sequelize.define('devices', {
		deviceId: {
			type: Sequelize.STRING,
			required: true
		},
		devStatus: {
			type: Sequelize.STRING,
			allowNull: false
		},
		connState: {
			type: Sequelize.STRING,
			allowNull: false
		},
		version: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE(3),
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			onUpdate: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
			allowNull: false
		}
	});
	return Device;
}
