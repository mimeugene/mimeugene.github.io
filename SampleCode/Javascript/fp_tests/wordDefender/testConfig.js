var local = {
	"appium-version": "1.6.4",
	platformName: "Android",
	platformVersion: "5.1 Lollipop (API Level 22)",
	deviceName: "test device",
	app: "/developer/fp_tests/test/app/family-portal-x86.apk",
	"app-package": "",
	"app-activity": "",
	avd: "Nexus_5X_API_22",
 };

 exports.local = local;

var saucelabs = {
  browserName: '',
  appiumVersion: '1.6.4',
  deviceName: 'Android Emulator',
	//phoneOnly: "true",
	platformVersion: '6.0',
	deviceType: 'tablet',
  deviceOrientation: 'portrait',
  platformName: 'Android',
  app: 'sauce-storage:fp.apk'
};

exports.saucelabs = saucelabs;

var mariam = {
  browserName: '',
  appiumVersion: '1.6.4',
  deviceName: 'Moto x',
	//phoneOnly: "true",
	platformVersion: '6.0',
  deviceOrientation: 'portrait',
  platformName: 'Android',
  app: "/developer/fp_tests/test/app/family-portal-x86.apk"
};

exports.mariam = mariam;

var maxwell = {
  browserName: '',
  appiumVersion: '1.6.4',
  deviceName: 'Motorolla G',
	//phoneOnly: "true",
	platformVersion: '7.0',
  deviceOrientation: 'portrait',
  platformName: 'Android',
  app: "/developer/fp_tests/test/app/family-portal-arm7.apk"
};

exports.maxwell = maxwell;

var eugene = {
  browserName: '',
  appiumVersion: '1.6.4',
  deviceName: '00b2c531b2b54df6',
	//phoneOnly: "true",
	platformVersion: '7.1',
  deviceOrientation: 'portrait',
  platformName: 'Android',
  app: "/developer/fp_tests/test/app/family-portal-arm7.apk"
};

exports.eugene = eugene;
