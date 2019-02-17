/**
 Achievement
 This component is responsible for checking, unlocking and
 displaying achievements.
 Achievement progress functions are generated at build time
 out of the achievements data, and replaces in the lodash
 template parameter.

 @namespace Components
 */
'use strict';

angular.module('game').component('achievements', {
  templateUrl: 'views/achievements.html',
  controller: 'ct_achievements',
  controllerAs: 'ct'
});

angular.module('game').controller('ct_achievements', ['$window', 'state', 'data', 'visibility',
  function ($window, state, data, visibility) {
    /* Achievement functions are derived from the data file. This template
    variable will be replaced with the achievement conditions */
    this._a6e39f6466732162012dd24cf010952b = function (player){
  return player.statistics.all_time["1H"] || 0;
};
this._def86885f021c58be2324a7c41618f8e = function (player){
  return player.statistics.all_time["xH"] || 0;
};
this._0e91ec1edcd852f8683eb80f9ba2d801 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["H"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7ae9bc395cce272ee07bae33d4f071cc = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["H"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._02663bbd75dae63faa58ee631f0175eb = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["H"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d961f8e0bad346bf4fecfe072ece6b28 = function (player){
  return player.statistics.all_time["4He"] || 0;
};
this._9e7546ef2dc144c1c054c389a308d628 = function (player){
  return player.statistics.all_time["xHe"] || 0;
};
this._2d4565a7009ffe469f007da4702e134a = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["He"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b0bc68a6a7f96060e3198868b35f9b6d = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["He"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._39e5a713b825dff4a35004c83edbedf7 = function (player){
  return player.statistics.all_time["6Li"] || 0;
};
this._83da7082c11d9b9f847ed134eadca6bc = function (player){
  return player.statistics.all_time["xLi"] || 0;
};
this._a92140ebe5c286fecce7bc3f1c123b37 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Li"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f29e87becc258b81623f17618c260d46 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Li"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8874ba5a21128f92fba08f6dd3fb5a2e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Li"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._950c67425a41cf0007fa18cfec8461fb = function (player){
  return player.statistics.all_time["9Be"] || 0;
};
this._63ee193a584d567a6f8e32c60b9e58b4 = function (player){
  return player.statistics.all_time["xBe"] || 0;
};
this._c5536b082c0e87c4974acf7dc43d9f79 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Be"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3fbd21a3bb598adf1efaa92323f4405c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Be"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1c128d16b4d0eca65e88fc809e987b87 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Be"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ac949f5dada24c4e2d179f3c0d6b675a = function (player){
  return player.statistics.all_time["11B"] || 0;
};
this._10cded75c823d2f03d056fc7aa4cada5 = function (player){
  return player.statistics.all_time["xB"] || 0;
};
this._f1e134c454c1c60dc7eb2eff97423dfd = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["B"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a33ec912d2de390dff06edaad7e25284 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["B"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7360fd0ba1c4f7d7e062f6ea9596581f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["B"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4752d1f8c83a82b416f1bb8bc6503e5d = function (player){
  return player.statistics.all_time["12C"] || 0;
};
this._ba2e750061f4a577eeb3cdd47c400f70 = function (player){
  return player.statistics.all_time["xC"] || 0;
};
this._c64c67fbdc6243254a9e5df350e1a6c0 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["C"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b8801e2eb4c6fa7fcb0e9d65f32f1e06 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["C"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._55ffa8e18789f109f8917c8be618020f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["C"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2f1277f4438f395d4c1db861b58c6730 = function (player){
  return player.statistics.all_time["14N"] || 0;
};
this._be3711f8b59547fa949af2f92e931608 = function (player){
  return player.statistics.all_time["xN"] || 0;
};
this._9fadeb212c5c3ddb3db86e04f7a1a645 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["N"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a07fc1a377e99eaa79b89a98c04a8a39 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["N"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f71c1a116858bf2e144bbe3afb9dbe2f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["N"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._db882134b9e3aedc7dbe6d0380828fe1 = function (player){
  return player.statistics.all_time["16O"] || 0;
};
this._a288b75acb6f436545cb5edd7e3807f8 = function (player){
  return player.statistics.all_time["xO"] || 0;
};
this._6775b5ccd2734abedcd77965c89fee86 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["O"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._90156a096a0ec354b46d64b15739cf03 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["O"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a17b18ffc11911090e0921166615b3db = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["O"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._52dc75276e04094946d4e68f24b9a263 = function (player){
  return player.statistics.all_time["19F"] || 0;
};
this._4ba768468657b642c0d8918b0e7daf61 = function (player){
  return player.statistics.all_time["xF"] || 0;
};
this._2bfe3e1755a756634ee0c9ef2cc3949f = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["F"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d1080c312dca3db3ebdea34cc8988dc7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["F"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._cc6e2e7fb37699ab9a561cc473ad0ff6 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["F"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d445ce98e9f44948b3dfc2b37f73eb58 = function (player){
  return player.statistics.all_time["20Ne"] || 0;
};
this._bfdcd4e96cc17ae57679642a2ad4d3ff = function (player){
  return player.statistics.all_time["xNe"] || 0;
};
this._9207f083863f3d442c47bd2a39a55cb8 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ne"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e3e0e83c2f666a9dfa5eda81833a92b3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ne"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c1c9fb53afb899f841163849c5d4ec40 = function (player){
  return player.statistics.all_time["23Na"] || 0;
};
this._bb90c599e6d7b75798cc8da3232ec0ed = function (player){
  return player.statistics.all_time["xNa"] || 0;
};
this._faf811ac8fec060efba1118a54f18857 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Na"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._93b53593cc8845dc1933f6b721375f1f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Na"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._51d0443449cd1bbd234a32a905f24ce1 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Na"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._58899b648ab4541e8f9dc6891501fcbe = function (player){
  return player.statistics.all_time["24Mg"] || 0;
};
this._d87e93e27fda9f48cfd68716ccce4ad4 = function (player){
  return player.statistics.all_time["xMg"] || 0;
};
this._25baf733083eef8edc927bd6a62a41c2 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Mg"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8860bd025d7d7232f26e4578d0209ee8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mg"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e0d3cb5676c6fc620bf5ded2cfe7289f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mg"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._deb3826f68cd61e94cf9f00fb3f226d4 = function (player){
  return player.statistics.all_time["27Al"] || 0;
};
this._fe109625d3f98d2e9f3d2c530e77cdfd = function (player){
  return player.statistics.all_time["xAl"] || 0;
};
this._43c9006f2cda63227d068dfc12996d5c = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Al"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._bd8bf5d094d324d4dd0e1e54a445e43c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Al"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5b4e4d7c6ee3ee68136d73e3ca38cec7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Al"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e6ddce4ef41eaa3555de0f83ccc9d6fc = function (player){
  return player.statistics.all_time["28Si"] || 0;
};
this._a379cf1f94d5e366eda89cca8e8bcc39 = function (player){
  return player.statistics.all_time["xSi"] || 0;
};
this._c03c50f75a91545b4401ce8525333ce4 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Si"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a0a24e7d83aeec1ee06981b2eb14677c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Si"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0e699e763af69bd3fc199a33cb9a63c7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Si"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._375dde77459331e173e60f86271717bd = function (player){
  return player.statistics.all_time["31P"] || 0;
};
this._cf57e62eb1d9c0229a6ab9470208c642 = function (player){
  return player.statistics.all_time["xP"] || 0;
};
this._20fab2d956b3c1a965dc59207c369d15 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["P"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._49d3b05dcaa147e6276d8cc7c05c4fe1 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["P"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d9ec0f6b92ff2f6c5fdbfcccbb05d2de = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["P"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8928d34eeff1dd63ebdb68a24df8e472 = function (player){
  return player.statistics.all_time["32S"] || 0;
};
this._cbf7ac75e6d80900a18da8e7b8229e10 = function (player){
  return player.statistics.all_time["xS"] || 0;
};
this._c01bac631093ace29a5b4e4afbd13c08 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["S"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5f5c352b1bebe357583f308797ad56bd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["S"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._661f899e15e7906afeb29aa2e7ca935a = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["S"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._47e3d4bfdcd57770faf52e3f22b6ec31 = function (player){
  return player.statistics.all_time["35Cl"] || 0;
};
this._93ff5d11520a5d1f8003579d8e971363 = function (player){
  return player.statistics.all_time["xCl"] || 0;
};
this._7b8656cbc516dc9d88d360c5df34d928 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cl"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4c5fb191999a283b63c89c1489fd63a9 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cl"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._aa8cbfa27933592fdfef87e4a87be78c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cl"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._351217c6338b12dcfe6135d84a0274cd = function (player){
  return player.statistics.all_time["40Ar"] || 0;
};
this._3bc5b42eec28f4d6f66974aabd1d4d32 = function (player){
  return player.statistics.all_time["xAr"] || 0;
};
this._799d54db01879ba5487b4fb37eaaa46b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ar"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1d8283786bebd77a7555b41a6104c6ad = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ar"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2619cf7bf8fe22de314527124c3bda31 = function (player){
  return player.statistics.all_time["39K"] || 0;
};
this._9ac84fd786271a7590c29c113ec6a78b = function (player){
  return player.statistics.all_time["xK"] || 0;
};
this._2ff3bcd44b65bee764646fac35975779 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["K"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._60e9d4b1dcfb6799fa2604bb1ac05871 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["K"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a5a7371aa1398dfa75777f897437eafa = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["K"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d11c4a8642cd4e4505493f98083e9f04 = function (player){
  return player.statistics.all_time["40Ca"] || 0;
};
this._4abb5e9615e942bdfa5432152bdab97f = function (player){
  return player.statistics.all_time["xCa"] || 0;
};
this._10e348ff18f645848182f324435d0ec0 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ca"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2091e5c89745beb84c51ab49d9fb2441 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ca"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a139ef8633bb16e89e21af2cad0e22ab = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ca"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._fb287d3fec5a5dfdfc115815b89b372e = function (player){
  return player.statistics.all_time["45Sc"] || 0;
};
this._018d81b171bf95e51d5db6555be82543 = function (player){
  return player.statistics.all_time["xSc"] || 0;
};
this._28888f5dfb14fb05379b31c2bbc90f52 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sc"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._aa4f3802be36d93638cbf55b71f633d3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sc"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3f1c06d97f414a1656af81cc42b5f250 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sc"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1f77e119182d233f08ff06d5f3ed4745 = function (player){
  return player.statistics.all_time["48Ti"] || 0;
};
this._f75ed61833a4702ec4d3a1ad300a8a37 = function (player){
  return player.statistics.all_time["xTi"] || 0;
};
this._f8ea3a54397a290ab22c3d0eef260ffa = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ti"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._126550989efe16c90e581e3c69768d81 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ti"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4671fc61208bf6097373ee5f6c3f55cd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ti"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._51769a6862a436aeeb35072d0292e31e = function (player){
  return player.statistics.all_time["51V"] || 0;
};
this._1b1a1cded7855e45de667f42fd4f08f5 = function (player){
  return player.statistics.all_time["xV"] || 0;
};
this._3abd0cabccc0d467d8101c98fceabe23 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["V"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f655f032294e65e730d467b6f946ee0c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["V"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0ce12fd4fbc9e20acb83fac30318f975 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["V"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._93f1c9ab30841bee73524bc83cc7f38b = function (player){
  return player.statistics.all_time["52Cr"] || 0;
};
this._361d2c0282e95bf49fc1ececae76f9d8 = function (player){
  return player.statistics.all_time["xCr"] || 0;
};
this._9145ca367556c643ea17497596c9483d = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._eb6755c8a544dcdb778b3f138c55a47c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._62cd0b9a62a71c7cead1fe041e482e0b = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cr"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f2aa1880246bb52b852cc33c39d2d7df = function (player){
  return player.statistics.all_time["55Mn"] || 0;
};
this._d790154212aa308844d105f137654363 = function (player){
  return player.statistics.all_time["xMn"] || 0;
};
this._2d72f0ba96490f506aaef816edf87c9a = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Mn"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5048c7b679ddf284e33fc0b577d4d1b8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mn"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6a28b0a081e6f67a19efe7d9cab67bcf = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mn"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8b931676948bc8438351ca790cd859cc = function (player){
  return player.statistics.all_time["56Fe"] || 0;
};
this._04877cfb764a08fd68868836f46a37f8 = function (player){
  return player.statistics.all_time["xFe"] || 0;
};
this._ba6ac2222cbebe7385d0c63b3dcf0b78 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Fe"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6e3714c81b9d98a18751a8fdcb26824d = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Fe"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._edf5e70dfaf753e6b3e21696cfa3d7a4 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Fe"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6615d6c1dfee6bcb317c5b153d4383f0 = function (player){
  return player.statistics.all_time["59Co"] || 0;
};
this._ed52f3dd2ce1155cf9603b579010d223 = function (player){
  return player.statistics.all_time["xCo"] || 0;
};
this._a9742884737dc94001e0dafdfbf342ee = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Co"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d08d4e764e32248ced0cedd886b7f91a = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Co"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._9a151686b8bbbadfa6b2e7ffb415866f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Co"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ce2c5fca90a3c8ffccaebb6464a8a3ff = function (player){
  return player.statistics.all_time["58Ni"] || 0;
};
this._835764a7a33440951b8ecdf4ca93c870 = function (player){
  return player.statistics.all_time["xNi"] || 0;
};
this._5d9d6b1ca2deeb4564927e1939aac510 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ni"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b8ceac2873a2dce8217052817167854e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ni"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ea0b872043dd11d843eb7254c10d8b82 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ni"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._99f42d52a726ee888d621b593cd7e1be = function (player){
  return player.statistics.all_time["63Cu"] || 0;
};
this._3e9d72515647cea4743a32d3c8aec3a8 = function (player){
  return player.statistics.all_time["xCu"] || 0;
};
this._59c09d623040ea19a0f03ba111189b6b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cu"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b7b043a8c0cda784f734ed95fed1ea4a = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cu"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._cff4fe8964994d8b1b1df898f807eecf = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cu"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5a9d7bd3ee6fa836da70566a99c6b576 = function (player){
  return player.statistics.all_time["64Zn"] || 0;
};
this._16583f290d8b1553779912ae8d25c681 = function (player){
  return player.statistics.all_time["xZn"] || 0;
};
this._e1a6d98964a4d6647eea2d809cea42b3 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Zn"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._274fd15dd57e0213b6a55a4cc3cbc1da = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Zn"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6564efc0e57dbd77f0ee3255977edd67 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Zn"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e9eeffec848fa7a48f717af04054d606 = function (player){
  return player.statistics.all_time["69Ga"] || 0;
};
this._11d45c9c8a6dd2f4e54dc9309cac014b = function (player){
  return player.statistics.all_time["xGa"] || 0;
};
this._9f12b0b392756221a541fcea2572d197 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ga"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._049175193b1737530e0b476bc22a0107 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ga"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._bfb7e6eb503279b3d6f5fad515d1389e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ga"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._72e3535a66fb53464e2e8ea7cc27a828 = function (player){
  return player.statistics.all_time["74Ge"] || 0;
};
this._54226e915e6842d891c73bcf3132a97b = function (player){
  return player.statistics.all_time["xGe"] || 0;
};
this._07f8a919f97a6f6ec18a261744ed7f5f = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ge"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._650bf96383f6ee4500768bc19e8b129f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ge"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0ad38d3ab10b7c50dbcb793601d02f3f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ge"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._386fcd1a87112b7fc88c5ffd9d95dd8b = function (player){
  return player.statistics.all_time["75As"] || 0;
};
this._5738ff48426fa2cb68c8fdd7cf9fc578 = function (player){
  return player.statistics.all_time["xAs"] || 0;
};
this._890f3bb8247bc3843c7f4a9bf5a1088f = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["As"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c803d83f8670d1b7daed1eb1e7e8cbd9 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["As"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._65c01754841b5cfe6f16b9f1365c9179 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["As"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8c31050e450d64bbccf83d9f07536abf = function (player){
  return player.statistics.all_time["80Se"] || 0;
};
this._8bdf8fb40e71d9c4b084a8166c2c8345 = function (player){
  return player.statistics.all_time["xSe"] || 0;
};
this._e8905a91db2a6a9e30adf90d02f553be = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Se"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1cae286eb7b71e422d2bdcff7f1d4b18 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Se"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._61a3e514728efafc86a9a3a6e94f8252 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Se"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._59146b05425b6f5c0087c05ee1133104 = function (player){
  return player.statistics.all_time["79Br"] || 0;
};
this._c57298f0f8fc5fe302332a2e2cd76c52 = function (player){
  return player.statistics.all_time["xBr"] || 0;
};
this._45bc4667d3907f4665b7cb378224b752 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Br"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a9c83552bb3ef866ce6c14ad38f36124 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Br"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._815af353df01855904e7937828077bd8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Br"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2c06e9f5eb295459346231a3f7682678 = function (player){
  return player.statistics.all_time["84Kr"] || 0;
};
this._f453968fd0993ae2c17f880dada2efca = function (player){
  return player.statistics.all_time["xKr"] || 0;
};
this._cf7aa60d78c8b15f8e1b86f36cfcac2e = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Kr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._271682a7232fcff4aeeed7a8d67acef4 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Kr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f7158e91bc405cdffbedc89ea72e598c = function (player){
  return player.statistics.all_time["85Rb"] || 0;
};
this._b50ca09184c6f90a135bd6c20215e962 = function (player){
  return player.statistics.all_time["xRb"] || 0;
};
this._4d3404e26295a24f38c361aba8031591 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Rb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._97ad4a10b4ef252e9a5bf096d0229aed = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Rb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._9904293af3dfbbda6c0fd5a529cfb715 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Rb"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._df3190aa129a8721f305cc5e0ebb7bc0 = function (player){
  return player.statistics.all_time["88Sr"] || 0;
};
this._285205b5839d40a7f0491b7317da6286 = function (player){
  return player.statistics.all_time["xSr"] || 0;
};
this._fd2036815d32e3fa21a5e79efa1683cf = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8ea55a7da376beb99a11a551b4fbc1dc = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6a9e9401cd75af2992a30424f9582ef3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sr"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ccc1b2939603ddc320bbe639aded19b3 = function (player){
  return player.statistics.all_time["89Y"] || 0;
};
this._d20e0193c988c24a111f8c1afe9bf97b = function (player){
  return player.statistics.all_time["xY"] || 0;
};
this._967f332d12d831a28c4cf1f9170230e4 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Y"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._59a8ace0b3464d077ea2f63b36d15249 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Y"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._59180810559d3359301fda44ed6dbb8c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Y"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._03713ddb57f28b27efb909aa0ca27722 = function (player){
  return player.statistics.all_time["90Zr"] || 0;
};
this._2c59db341743e0ba36742ccc7e26fea2 = function (player){
  return player.statistics.all_time["xZr"] || 0;
};
this._bc505fce3849991d9256d32adeac7cd6 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Zr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0552335d1b8876cfcdc1f4cdd2e46d1f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Zr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c85efa40a56c9066d64d13ad8583e5cf = function (player){
  return player.statistics.all_time["93Nb"] || 0;
};
this._f47f5f5c478719841754424c3c246b95 = function (player){
  return player.statistics.all_time["xNb"] || 0;
};
this._515e41345261ef5d405b5281ed94b504 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Nb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f5602c6429a0b48f6443ac714fdca6ba = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Nb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._649c0e523b2aa22c2cef8517d3378f40 = function (player){
  return player.statistics.all_time["98Mo"] || 0;
};
this._21443945c80772a71c1e34255746e2d7 = function (player){
  return player.statistics.all_time["xMo"] || 0;
};
this._e917f45ab502c672869834259a3ff0b4 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Mo"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c66dd1bf8e026e079aadd4759ee41868 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mo"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._63f6c54ee7769693b145c4fcccd6181c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Mo"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e3dbb644ba02698026685b6d31a68753 = function (player){
  return player.statistics.all_time["99Tc"] || 0;
};
this._116a6811cc449b48f276870df4877f7d = function (player){
  return player.statistics.all_time["xTc"] || 0;
};
this._1c461bd3ea8c14f7a66162a90b33ec27 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Tc"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f751fdb13fbcd36424c142e17546320f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tc"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._282ea5bdfec019d593464e05fcac15be = function (player){
  return player.statistics.all_time["102Ru"] || 0;
};
this._c049b8c39c2972f3f75223448b489999 = function (player){
  return player.statistics.all_time["xRu"] || 0;
};
this._285bf02ce77e7bf4aa892b4b8b11efc0 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ru"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._80d75aeffe92092769464df0eec470ec = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ru"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f5b56dba1691e7461abd5132133cf452 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ru"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3aebcb201dbe3b70d1bb4444df132394 = function (player){
  return player.statistics.all_time["103Rh"] || 0;
};
this._e02a14e167e11bb06da4cc0d914d96c0 = function (player){
  return player.statistics.all_time["xRh"] || 0;
};
this._2eb89779c177f8ae2a4ec4a0c973e733 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Rh"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ecffd734235b9d306a4a0e2f2bb77409 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Rh"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d8bfe7e5092f0ddbf8c747c605e2aac7 = function (player){
  return player.statistics.all_time["106Pd"] || 0;
};
this._7319fd46691486734ed8f93569fce714 = function (player){
  return player.statistics.all_time["xPd"] || 0;
};
this._63189493db9198628b8f8d33148ac64e = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pd"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3a25fb03a0a11a4a9098f6ac6a2bec92 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pd"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2006abcb3c797e0df5cac94a3a4632a5 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pd"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d63b13cebf05eb0c76b90d5813156de4 = function (player){
  return player.statistics.all_time["107Ag"] || 0;
};
this._7bb5a665eda29c16237defc42498ef12 = function (player){
  return player.statistics.all_time["xAg"] || 0;
};
this._31f76feecfe102312ca90cbf4810d41b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ag"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2bad682a16069cf66036cc6ff257f092 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ag"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4aa5fe1d26b3bf88cdd7af3e6f606c3f = function (player){
  return player.statistics.all_time["114Cd"] || 0;
};
this._5c309fc8f2b6dd9d8b803bf4e493f7ba = function (player){
  return player.statistics.all_time["xCd"] || 0;
};
this._9eefc2f520a8f2a1ed527c15a73b2b4b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cd"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7d1f87118366cea951c3193b6f7ee8a8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cd"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b842f623af1bc4764ff005528558c6e7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cd"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f1aed964805163e2ed3b20e73aa05d22 = function (player){
  return player.statistics.all_time["115In"] || 0;
};
this._54b458af9e2f5cbcb3b4706e8c172bd9 = function (player){
  return player.statistics.all_time["xIn"] || 0;
};
this._e8e71069471b3c093a4128ccd9dd9d81 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["In"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._398df2b66fbd146b1f3ad72d6a30d9e3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["In"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._92418f6494e07fa9fa7d7906871577e6 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["In"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._86c86c913b7e710bf8283447194727c9 = function (player){
  return player.statistics.all_time["120Sn"] || 0;
};
this._e2a52f8dcb3728473b4d48b8e8f79d49 = function (player){
  return player.statistics.all_time["xSn"] || 0;
};
this._fa6b25b57f71ec50f2f4268df9210c72 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sn"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5fab9a9250592f07b7371b7b2d107cdc = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sn"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3602b1d2ff601bdfcc54edf11fca1e65 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sn"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8944f04b438086a0a43f1f15e22cc214 = function (player){
  return player.statistics.all_time["121Sb"] || 0;
};
this._3940e33283caefed56998c5d4caeb8ea = function (player){
  return player.statistics.all_time["xSb"] || 0;
};
this._457fdb0dd6f58f0039fc2791dce07afc = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._21b261d155b105a666cca5f894fcdf9f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._baaa65bc2def972ad683e2249748a208 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sb"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._72ab311085715491a6d919148d8a7084 = function (player){
  return player.statistics.all_time["130Te"] || 0;
};
this._21ff2054863c748c7b7160673c78c378 = function (player){
  return player.statistics.all_time["xTe"] || 0;
};
this._7d725a1c2c2bfca9a8e00d9365ada6aa = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Te"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ad9874070cda09d3ac43fcc97399f868 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Te"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._505fdd023ddc04e6af348685dbf4d25d = function (player){
  return player.statistics.all_time["127I"] || 0;
};
this._4eb82c32a6ca92c316d44ddc2b274c4a = function (player){
  return player.statistics.all_time["xI"] || 0;
};
this._ef37acad0cbc9c4a1a6fb0650acd8948 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["I"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._47980a0fbb6d918921844b75cf8cc21a = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["I"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b64a060b260b0db3980acdf7374690dd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["I"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e3ffac1cbb393f78a3580359d90ab7f7 = function (player){
  return player.statistics.all_time["132Xe"] || 0;
};
this._ce68123e08852c2e9f93597118fff681 = function (player){
  return player.statistics.all_time["xXe"] || 0;
};
this._c55d90ac4520d9efe433e33a7a15575e = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Xe"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._679ebbb853c763351c3b421f4634afd3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Xe"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3c2ebe2aec8d93b6b025c5760efd4594 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Xe"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e90d3ff8409a1e928a8179e1852a6670 = function (player){
  return player.statistics.all_time["133Cs"] || 0;
};
this._64503233282ed1e2c5e80ebabffd4e17 = function (player){
  return player.statistics.all_time["xCs"] || 0;
};
this._01aa21ccc3f692038bc7026ef32cc473 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cs"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8ec9a0184a63cfcccb87fcf0cfe43dd9 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cs"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._13547b4815c9a65c93f7eb309cd19bcd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cs"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b8df16e37cd3cbca8bc2be0cbe9dc718 = function (player){
  return player.statistics.all_time["138Ba"] || 0;
};
this._79c282337bb7aa446690e2692f480d93 = function (player){
  return player.statistics.all_time["xBa"] || 0;
};
this._9c4b3d615d306782e7158c69ad05eafa = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ba"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4f5b25936c90ffbbf87f1aa51d26beed = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ba"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0955dfd274046179fa22625122700fc7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ba"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._61c4547e39971331181147b2b7989ff6 = function (player){
  return player.statistics.all_time["139La"] || 0;
};
this._c5ad52f417f05f8200564e749fbb69d0 = function (player){
  return player.statistics.all_time["xLa"] || 0;
};
this._2bb53dfb9e7c3de824a3c0c18a977fad = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["La"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ad29eb0f09e85d07ba18aad119caed43 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["La"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._53c1ac39f9bfa3a5c3418edcd743e480 = function (player){
  return player.statistics.all_time["140Ce"] || 0;
};
this._aaf677083da982205db6428ffd1f7084 = function (player){
  return player.statistics.all_time["xCe"] || 0;
};
this._9ea05407b7f149029d53d572e025dcf7 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ce"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b0bf2aa9570677acfb0dbccb56fdcfc3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ce"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._edaaa475982688a98f9b5989f0fbe6d8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ce"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6354b93a407e32d98207fd9c243e6ab5 = function (player){
  return player.statistics.all_time["141Pr"] || 0;
};
this._382655d4f18136b51c8e92b0c1a72a7c = function (player){
  return player.statistics.all_time["xPr"] || 0;
};
this._ddda542bbad7934fcb8c203cdb939c58 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5f719da4190c2b4782c29bb14c8c39af = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5e3662c23d2d59315ae4bfb129cae84c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pr"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a6b6a01fc7da7ea62236fae7dfe401f8 = function (player){
  return player.statistics.all_time["142Nd"] || 0;
};
this._8beb873fe0f91a32349bc5d4536157dd = function (player){
  return player.statistics.all_time["xNd"] || 0;
};
this._fc5491897c126257d8ff044105e68230 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Nd"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._026f2387aa46623c02128d7b56953693 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Nd"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._95c3b69d9aaf456f1ff6e0e45bbe13c5 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Nd"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0db7e4bbe02e034f795ade15422f888d = function (player){
  return player.statistics.all_time["147Pm"] || 0;
};
this._855becb6f782e84c13b4533e216424b3 = function (player){
  return player.statistics.all_time["xPm"] || 0;
};
this._637b07c5376858faf16325232ea76614 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pm"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._18e6547bbb793830f1ff94bafeaf2f58 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pm"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1ecffaf534647a3dd6d76590a1bb25c0 = function (player){
  return player.statistics.all_time["152Sm"] || 0;
};
this._9837d3f64ca094d91562a4ba1d4726f2 = function (player){
  return player.statistics.all_time["xSm"] || 0;
};
this._b2f4c80281886b2cb79ca993d01bd8d6 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sm"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f6031e588d77eb628c58b1517df2fe91 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sm"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4465c145df61ed95204ab1bb874f0ece = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Sm"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5a274969215d10ebf0bb9b24cd03f6f3 = function (player){
  return player.statistics.all_time["153Eu"] || 0;
};
this._7d8112fff28fa8cc2980117cefe42737 = function (player){
  return player.statistics.all_time["xEu"] || 0;
};
this._23bc0fe87799d5a62cf973b1e937ed14 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Eu"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._53fced9244ff59c0182aa4eac97001e8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Eu"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._756ecdaff9e7fd9221294602ea17e1b1 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Eu"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2d9558e037d9f1b9dbd4438724ea3988 = function (player){
  return player.statistics.all_time["158Gd"] || 0;
};
this._5216c2a50395f777866151cd30ecba42 = function (player){
  return player.statistics.all_time["xGd"] || 0;
};
this._d6b0c2b2c46a85c9b6c28559a21142d8 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Gd"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4dd00bb38c24c6c9b976911fe76c1a9d = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Gd"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e3f960acef3dbacb77036bb369df69f1 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Gd"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d8941926f36114f3020af36e1d094d49 = function (player){
  return player.statistics.all_time["159Tb"] || 0;
};
this._ccb56d0a6031c7ae87640608adf40d59 = function (player){
  return player.statistics.all_time["xTb"] || 0;
};
this._476999ed0f044f7fde658bdb946f3a0a = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Tb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d49cbb0b3dfa6ea1f533bbb646f780f7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a4071deeec09c59e9d6f6b8000494ab1 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tb"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1148f6ed78ab4ad130a6d484ce155436 = function (player){
  return player.statistics.all_time["164Dy"] || 0;
};
this._ec85b6236ac99099185e277e48c4048c = function (player){
  return player.statistics.all_time["xDy"] || 0;
};
this._54b74ce4a2f8d9431788364ad7202fde = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Dy"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f99f1e81d5c20007d41bcf5e3d8f90b9 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Dy"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5591549c5c9562576fbdf572e0bcb39d = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Dy"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ce4bee0b536dc377e3c8bc59f00454a2 = function (player){
  return player.statistics.all_time["165Ho"] || 0;
};
this._f9ed113badce99ae99fa20c905430563 = function (player){
  return player.statistics.all_time["xHo"] || 0;
};
this._aebcdb440b38b6cf9cefac8c667f2265 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ho"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b333e108ff98fee7b03a6bf2b649c222 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ho"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._0c59240eb21d5f3070f6d3b21f64e4d2 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ho"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c4e7035d31696ce33ef125e333df2021 = function (player){
  return player.statistics.all_time["166Er"] || 0;
};
this._38b68ff96051569959278a86c44bb0a7 = function (player){
  return player.statistics.all_time["xEr"] || 0;
};
this._c2293c2d7dead6da8fc0e1503bb5a2f1 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Er"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8f520abc1e3d40fb66eabd7791c43ac4 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Er"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2e65edd12e0c9fb96372f9d34a1b621c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Er"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4cf5a19e53a8dd7e86d912d4652ce327 = function (player){
  return player.statistics.all_time["169Tm"] || 0;
};
this._cf1aa5e4131b8d418024ae2dc6652ed8 = function (player){
  return player.statistics.all_time["xTm"] || 0;
};
this._b2e658d426be7af4b3ff657a88e86e78 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Tm"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._fd6a7b69aac1c2a84bf149633ce5ebce = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tm"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8534a11b21bd45af1a2f5cb80fce2089 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tm"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6201a87d5a8a7aa59f1191d81617dbc5 = function (player){
  return player.statistics.all_time["174Yb"] || 0;
};
this._6e475eb4703a194f40c36aebd739e976 = function (player){
  return player.statistics.all_time["xYb"] || 0;
};
this._29545564cf64388f2d7bf519e476636b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Yb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._31abb9c02c335c36d5a090b18d9c2cbd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Yb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5c99503766df4e3ffed8790b7bf2f2a8 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Yb"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._bca8c23d441a25251ceaf3c60c7b3c10 = function (player){
  return player.statistics.all_time["175Lu"] || 0;
};
this._bb91616fba17fb055c0376145dd3ccd8 = function (player){
  return player.statistics.all_time["xLu"] || 0;
};
this._68a63b99e6560732b451ce7565085626 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Lu"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._da27d88f17901c5e643c46a6c6dad555 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Lu"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ee602f32e0dc00d5b9ec0d15c617d1e6 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Lu"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._491773aaf27c834ef23c2e7e8d0f374c = function (player){
  return player.statistics.all_time["180Hf"] || 0;
};
this._ec8e97573b059ead8f17a7e7d7a82c73 = function (player){
  return player.statistics.all_time["xHf"] || 0;
};
this._2b17f10ae928f88526e44471aa2a5639 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Hf"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7c2a58a9f3cb420c00ca9b35c0516831 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Hf"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._71d944626e17b9eb2f2483f92a03bfc9 = function (player){
  return player.statistics.all_time["181Ta"] || 0;
};
this._7e684bb9e2a29ab9c9b2adfe131a93c0 = function (player){
  return player.statistics.all_time["xTa"] || 0;
};
this._3b382b623a64d2e6c9f745588d6206c7 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ta"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c86ca59d1890fab41ab8a4f83b22d0d7 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ta"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7b2e157116725151fb20e39a719c9e97 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ta"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ecdd438d1e13dd2fc23c0d8a0ecca0c2 = function (player){
  return player.statistics.all_time["184W"] || 0;
};
this._0277b97fd343559b756b526a7cf160b2 = function (player){
  return player.statistics.all_time["xW"] || 0;
};
this._8f9536c3d7ee254d933d96d044d96e98 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["W"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._99f30c9ccfd8ff15e45d042a6828989e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["W"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f644f18bf8d7e9029a17d934fc056a27 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["W"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._3dc960af22ebb0cd74237fe62c7daa24 = function (player){
  return player.statistics.all_time["187Re"] || 0;
};
this._d774f140533279e87791bbfe1a832197 = function (player){
  return player.statistics.all_time["xRe"] || 0;
};
this._9c4c3e55d054034ab70c146961c98dda = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Re"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a6a374ce242537db206bffa1641a9320 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Re"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7c7c696e7d4e3ecc0b2b3d139a8a6911 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Re"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._aa4d5c2b27e057050cb74d3107066ea6 = function (player){
  return player.statistics.all_time["192Os"] || 0;
};
this._1a4c1ea6c8ac6846a5ac2a6fdbaf3e04 = function (player){
  return player.statistics.all_time["xOs"] || 0;
};
this._0cfa38637b3708bd5b4051dd92187559 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Os"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a78414b2357a4d35843fbd029dc7a00b = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Os"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8c5e9a1cfe344bf4d3d80026124e02a3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Os"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2ee54e4a3642d9ccf8932a937d302bf7 = function (player){
  return player.statistics.all_time["193Ir"] || 0;
};
this._27a2ca1452732f0814799258e16a2cab = function (player){
  return player.statistics.all_time["xIr"] || 0;
};
this._dbaf170b37f20bada4f69027ceffbe19 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ir"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._03a9e850fbb9820bd05b11fc3fbf792f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ir"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._62026bdc1cc697ea42f6daf964bd2744 = function (player){
  return player.statistics.all_time["195Pt"] || 0;
};
this._a699754232f8d83294e8d937b5173380 = function (player){
  return player.statistics.all_time["xPt"] || 0;
};
this._61a7412f8be14df354ee6206341dc7f7 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pt"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._279d010be19b39007d0077d0f6571b4e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pt"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._629799ab4e3d89a141badcfcd1497c31 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pt"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._80aaec4e64fb446674688ceb041ad61e = function (player){
  return player.statistics.all_time["197Au"] || 0;
};
this._c121972c32ec4c704386e16d63228321 = function (player){
  return player.statistics.all_time["xAu"] || 0;
};
this._c4c3f9487a3448b467151a7fb81533a9 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Au"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c765123efb16706e523781109ee139fe = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Au"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._1b0ecc9203ccab5ce2a10fc4e086ef6d = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Au"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._bce213759fccc7b4fb26097c11162b49 = function (player){
  return player.statistics.all_time["202Hg"] || 0;
};
this._1597e66a67bc08b06f25a129b9bb399c = function (player){
  return player.statistics.all_time["xHg"] || 0;
};
this._d17ad108fc4043708d211b0871e5b953 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Hg"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._142252f6feedea0df20cf5c0acc90116 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Hg"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._79fe08d47be4d64c9cd4e8887238c21e = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Hg"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._018b5b52f311bf18c576191a5620ba7e = function (player){
  return player.statistics.all_time["205Tl"] || 0;
};
this._f6d0b278a39e9c325288643a9e4fd9ea = function (player){
  return player.statistics.all_time["xTl"] || 0;
};
this._caa0685b9ee3991ebb2471199b2b4513 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Tl"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._38cdfcbef8c2ff9ff5fe1e7def2eb102 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tl"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2698a5614bec1d3d6ed77a98e9c39ecf = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Tl"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._47c4396934d82eb2fda0f1b67def32a2 = function (player){
  return player.statistics.all_time["208Pb"] || 0;
};
this._a8851ca530ebcfcef3c2a3636d99b019 = function (player){
  return player.statistics.all_time["xPb"] || 0;
};
this._b7f5de3d871b33cbe5c2990e668cb0a9 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pb"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._fe830af3898deaa5dc845ee84b2f9fa3 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pb"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._554cf99b0c30fd369d8f3d109921cbdd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pb"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._040eb5ea5c1bb0263b198a2047c250d7 = function (player){
  return player.statistics.all_time["209Bi"] || 0;
};
this._bc73c5288b22e014783db2330e44cc2e = function (player){
  return player.statistics.all_time["xBi"] || 0;
};
this._cd2fffb72b34029d0437b223f67ef68c = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Bi"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._9afbe7cc53c914b4f21b0fb17ba08595 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Bi"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._48d1540f29549cd8da440b52f5b0724a = function (player){
  return player.statistics.all_time["210Po"] || 0;
};
this._baa193f20cbddbbed6e962359e1f0b55 = function (player){
  return player.statistics.all_time["xPo"] || 0;
};
this._9966b5190cb7900111dcc68209c3d21d = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Po"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f0c46ce546e95a3a08f8370350e7146b = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Po"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._aafd0460410da4d513429cb673c477ad = function (player){
  return player.statistics.all_time["210At"] || 0;
};
this._82a3f949db6396502b77f66081a61166 = function (player){
  return player.statistics.all_time["xAt"] || 0;
};
this._0cfe9d2b9ce19423653d953844ab5e43 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["At"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._08cfa7f764249c02319915445b6d77c2 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["At"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._641169702af29ba15962ec280324a2e9 = function (player){
  return player.statistics.all_time["222Rn"] || 0;
};
this._81ba5b280795baaaf969330c8e5381ed = function (player){
  return player.statistics.all_time["xRn"] || 0;
};
this._b78080ea6d91e2b297131412fa7ce0c3 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Rn"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6412a3527dbddf6c68cc86a9a177450b = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Rn"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6b1fc07a4a1a8eb35558745c01f0cea2 = function (player){
  return player.statistics.all_time["223Fr"] || 0;
};
this._22dc12c47890ed283eb079720d0a3a7b = function (player){
  return player.statistics.all_time["xFr"] || 0;
};
this._044f0c3c5b21e7e0ab320c300ae9e889 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Fr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b03eaf266768b47d27966d7710ddb9cb = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Fr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7da5d2e2173d1fa4f30f414f8b76f275 = function (player){
  return player.statistics.all_time["226Ra"] || 0;
};
this._8a8ffc5a3a33800856fabe1437999924 = function (player){
  return player.statistics.all_time["xRa"] || 0;
};
this._9d9eb6f200eeafc8718e35148bdf1907 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ra"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d83e524564ef1e54d3fb9326c3422f4c = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ra"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a14e6cbb74685fd66a72a9959df644c1 = function (player){
  return player.statistics.all_time["227Ac"] || 0;
};
this._80f861bcd13acfa97638fd6c4fef5638 = function (player){
  return player.statistics.all_time["xAc"] || 0;
};
this._04003cbf0b214e5cf04721a0552404ca = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ac"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8a97a792469f06c4bfcfcf7dd41bb121 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Ac"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c65cefeb6faa3bccd23099a44af5a8e8 = function (player){
  return player.statistics.all_time["232Th"] || 0;
};
this._f931578c3938cb97d5abca3eef429bd2 = function (player){
  return player.statistics.all_time["xTh"] || 0;
};
this._6a3a7a6eb5f9384423bcbb5e2528c4eb = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Th"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._a389519d4b37f3e4f623411b25d94c0a = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Th"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._91ee1da94d4a44ef8893443bbb2de287 = function (player){
  return player.statistics.all_time["231Pa"] || 0;
};
this._8b0405892971cc83f160200f8d6b6040 = function (player){
  return player.statistics.all_time["xPa"] || 0;
};
this._6ef951e82064fbbb36c238cc0c93187d = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pa"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._db4c4e3eb1b503b6b82f2fa69d3aabbc = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pa"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7f252dbeaae3e2a935a803533bdc081c = function (player){
  return player.statistics.all_time["238U"] || 0;
};
this._2b685345e1dc84d919368a3292e0c125 = function (player){
  return player.statistics.all_time["xU"] || 0;
};
this._e8d14d682786488f3fc6a07a757ecbb0 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["U"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._deb0ee041889ac87dc9feeb2c1b7b923 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["U"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5e8dd434efcf76a5090eedff620ced4f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["U"].includes){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e63c40646a086d3b21bd7be301dac525 = function (player){
  return player.statistics.all_time["237Np"] || 0;
};
this._8503d6d9c7a9af84b3267506b715b840 = function (player){
  return player.statistics.all_time["xNp"] || 0;
};
this._81c5e657685265a3b4fa56e5412d423e = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Np"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6e36295f8ee300d5afec1c39252b1fb0 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Np"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d553e4277d8545c72b8b881e6715fb32 = function (player){
  return player.statistics.all_time["244Pu"] || 0;
};
this._84c187964a78303fee629f0ffdc32bc2 = function (player){
  return player.statistics.all_time["xPu"] || 0;
};
this._aad354fcd11f8a1dfca6f1cd79d91774 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Pu"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._c8fc4537ac71dc73cb10aac754fe79ff = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Pu"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2387af95f055d8f407066ae3337eacfa = function (player){
  return player.statistics.all_time["243Am"] || 0;
};
this._9fd164647f0b2a47948507ee547bfcc6 = function (player){
  return player.statistics.all_time["xAm"] || 0;
};
this._fb08066c156ec144321ec955d17f7842 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Am"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._97b7b6e666a4ef10dc98615097ea8885 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Am"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._84a73d340880ac7b2737b9cdf4b79dd3 = function (player){
  return player.statistics.all_time["247Cm"] || 0;
};
this._c5eb6096ed67aa3f87d4c2090da29729 = function (player){
  return player.statistics.all_time["xCm"] || 0;
};
this._8f31e46b47dbe0bc95b568daa3440d29 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cm"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7008d4fceea4153f722165b61b0eb044 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cm"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e967122dcfdede46ae2f7223e863a4fa = function (player){
  return player.statistics.all_time["247Bk"] || 0;
};
this._739766403194c5c9a2d0add7bf940955 = function (player){
  return player.statistics.all_time["xBk"] || 0;
};
this._fcadbc0d7823a77d1a9134e0193f0b54 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Bk"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d5cce7a3ca70e4870b7a729fc266be18 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Bk"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._975ac9b9b750740d2977e55c70b72c23 = function (player){
  return player.statistics.all_time["251Cf"] || 0;
};
this._9cdaed607f741ff2d0988b60152c1a05 = function (player){
  return player.statistics.all_time["xCf"] || 0;
};
this._6c5a02c415e01d7cb6dc82b608b6659e = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cf"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._e0d961504805f7386af0431afbde3a40 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Cf"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ee41e1b54d3163b5a540fcac3ff6d37c = function (player){
  return player.statistics.all_time["252Es"] || 0;
};
this._d830840b2d7de6986b84809999c81eb6 = function (player){
  return player.statistics.all_time["xEs"] || 0;
};
this._c00a2ddb6cb9bf68273e8e93b656eabd = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Es"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._2d4643c25d779e0d34c70919546a4c8f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Es"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4aafc37f4ef829be1bf4aa547636dc42 = function (player){
  return player.statistics.all_time["257Fm"] || 0;
};
this._6f1baee2ab7a1f22366b03e3bc34964e = function (player){
  return player.statistics.all_time["xFm"] || 0;
};
this._5f32977a644871a509ec3a55ff247b9a = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Fm"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._acda152fface709d8c7a43102435d513 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Fm"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7f6936bd57b8ec06c2a52b53220c36c4 = function (player){
  return player.statistics.all_time["258Md"] || 0;
};
this._faab7858683e0a0695b272e16b9b082a = function (player){
  return player.statistics.all_time["xMd"] || 0;
};
this._59722d35c0480df733169a70d87de0f3 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Md"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f4ea72011b21a2aba97e3037f4d7d12f = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Md"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._6be1dfb2a7758d12f575e0358c14d93b = function (player){
  return player.statistics.all_time["259No"] || 0;
};
this._1c65a9f916dd0a0c938f742e998a3db8 = function (player){
  return player.statistics.all_time["xNo"] || 0;
};
this._d37a6b786b3352bfda87d17c2e33fb53 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["No"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5596ab7e7e09416f79de00c0ef25af87 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["No"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._9186aec90ed36eee6c5b15c33620ebe1 = function (player){
  return player.statistics.all_time["266Lr"] || 0;
};
this._d3a43b975fbfaf42916481e2f11412e3 = function (player){
  return player.statistics.all_time["xLr"] || 0;
};
this._986d4fe2015ecf760ddd671e798b62bf = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Lr"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._7880a973340368c59015330fc693a6cd = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Lr"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._25074e15ea7562a872fafb96313ae25e = function (player){
  return player.statistics.all_time["267Rf"] || 0;
};
this._c1ca94162f20703928fb1cbfce6d7f93 = function (player){
  return player.statistics.all_time["xRf"] || 0;
};
this._8d91bd683130ef032a7268229726c977 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Rf"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f68f1365642dbb47ba1af4f4ef500403 = function (player){
  return (() => {
let count = 0;
for(let key of data.elements["Rf"].includes){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._35623ad5f3d7bb4bc6b5f2605a5eb27d = function (player){
  return player.statistics.all_time["268Db"] || 0;
};
this._09caa6722233756d514799a2e25fc32d = function (player){
  return player.statistics.all_time["xDb"] || 0;
};
this._1ef297533805e6a8772db108d2992501 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Db"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._8d13b781dabbeae4c8efd06d6803ac1b = function (player){
  return player.statistics.all_time["269Sg"] || 0;
};
this._8bc3e89a302c614f78d9ade8056fc911 = function (player){
  return player.statistics.all_time["xSg"] || 0;
};
this._0600f2c1b0741d066d3898e93219ad81 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Sg"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._b0df933ae79d9342235ea18a06c1d82a = function (player){
  return player.statistics.all_time["278Bh"] || 0;
};
this._71bdaa950bb0c2fadbd7066f47591dc6 = function (player){
  return player.statistics.all_time["xBh"] || 0;
};
this._c772fb42306a79aa428bee666cd7d956 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Bh"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._400a981dffffcd2b15ce8b33a9f76d06 = function (player){
  return player.statistics.all_time["277Hs"] || 0;
};
this._7d6dc98f4e1039b5b45b929ed8f6efa7 = function (player){
  return player.statistics.all_time["xHs"] || 0;
};
this._a4f358aa95735e1d35a21b35f0acc329 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Hs"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f8df3079f989e89292d24da955de9420 = function (player){
  return player.statistics.all_time["282Mt"] || 0;
};
this._ccd3603f205d5191240b21410478af59 = function (player){
  return player.statistics.all_time["xMt"] || 0;
};
this._f21866c656622fb0d38eb751fd826388 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Mt"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._42d719d53e2fdf7b76bf8c9050b62861 = function (player){
  return player.statistics.all_time["281Ds"] || 0;
};
this._5f6f3b5f569eaa4da983384d34bf0d58 = function (player){
  return player.statistics.all_time["xDs"] || 0;
};
this._74d21c731a334d9be96d0ba58f10b6bd = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ds"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._bdd23ba8e0c783c1d5ff34f6f0ba454e = function (player){
  return player.statistics.all_time["286Rg"] || 0;
};
this._57f3cb46e6bba3d70f3c1bbcabf0f858 = function (player){
  return player.statistics.all_time["xRg"] || 0;
};
this._d4a5843f14cd535b81d21f3de49d332b = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Rg"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._f23d77faffe26c1db2824ee62b5d4735 = function (player){
  return player.statistics.all_time["285Cn"] || 0;
};
this._99f530dcdcb80db8214f6631a07b5a2d = function (player){
  return player.statistics.all_time["xCn"] || 0;
};
this._094611eece13ba970153a0fb8617a59f = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Cn"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._28b5a81a5917564377bc64592400eded = function (player){
  return player.statistics.all_time["286Nh"] || 0;
};
this._13e5a562f8f001da09c4a3fb4cb8cbe0 = function (player){
  return player.statistics.all_time["xNh"] || 0;
};
this._090b5f75659f16d37f271664b58dda7f = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Nh"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._66fa602648cb7b5f1a8c53e93004bd37 = function (player){
  return player.statistics.all_time["290Fl"] || 0;
};
this._163b01413bbc14d360b9f04cd0fa39a8 = function (player){
  return player.statistics.all_time["xFl"] || 0;
};
this._ea9ba83ebefe3146bf5f37696efc77e8 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Fl"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d6569c594b980bacbead7f0da482db74 = function (player){
  return player.statistics.all_time["290Mc"] || 0;
};
this._c35cfeacb5bc51de11fa9c55d70631f8 = function (player){
  return player.statistics.all_time["xMc"] || 0;
};
this._5ff41954671f74e6f391f60750f246fd = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Mc"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ca1476adca38d023385940b8fef5ac19 = function (player){
  return player.statistics.all_time["293Lv"] || 0;
};
this._086fed9b14bd07d2c2799c7149802059 = function (player){
  return player.statistics.all_time["xLv"] || 0;
};
this._dfaa789c18234c9a356493abcddf3cb3 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Lv"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._82cd3867e99efa75f29bf0a49e205986 = function (player){
  return player.statistics.all_time["294Ts"] || 0;
};
this._58543595268bed26cd2b1341b268249e = function (player){
  return player.statistics.all_time["xTs"] || 0;
};
this._6d55a110d28b5b17e5e8117f494b2873 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Ts"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._41841cfbf97d5a4b876ba813dfdf1d64 = function (player){
  return player.statistics.all_time["294Og"] || 0;
};
this._0f160b270800bb91e39d3e39fcc4594d = function (player){
  return player.statistics.all_time["xOg"] || 0;
};
this._eba3ac5e46f20727008cd1c4f5073df4 = function (player){
  return (() => {
let count = 0;
for(let key in data.elements["Og"].isotopes){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._d785b578a95bb284be8063b3a7b58e2f = function (player){
  return (() => {
let count = 0;
for(let key in player.elements){
  if (player.elements[key]) {
    count++;
  }
}
return count;
})();
};
this._f9c54dd562890b126307ae60260a71cb = function (player){
  return (() => {
let count = 0;
for(let key in player.resources){
  if (data.resources[key].type.indexOf("isotope") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._713250f896a228e4d40f5b3de13be29c = function (player){
  return (() => {
let count = 0;
for(let key in player.resources){
  if (data.resources[key].type.indexOf("ion") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._5ec848e406127ca0f450a433507dde69 = function (player){
  return (() => {
let count = 0;
for(let key in player.resources){
  if (data.resources[key].type.indexOf("molecule") !== -1 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._ba9ce2bbc748a31e360d2b3a4118eb09 = function (player){
  return (() => {
let count = 0;
for(let key in player.resources){
  if (Object.keys(data.resources[key].elements).length === 0 &&
      player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._adf6cfcc0cfb083f52a83e7b669915eb = function (player){
  return (() => {
let count = 0;
for(let key of ["n","3H","6He","7Be","10Be","10C","11C","14C","13N","16N","14O","15O","19O","18F","17F","20F","21F","19Ne","23Ne","24Ne","22Na","24Na","21Na","25Na","26Na","23Mg","27Mg","28Mg","29Mg","26Al","28Al","29Al","30Al","27Si","31Si","32Si","32P","33P","30P","34P","35P","29P","35S","37S","38S","36Cl","38Cl","39Cl","40Cl","41Cl","37Ar","39Ar","41Ar","42Ar","43Ar","44Ar","38K","42K","43K","44K","45K","46K","47K","40K","47Ca","49Ca","50Ca","41Ca","45Ca","48Ca","43Sc","49Sc","50Sc","51Sc","44Sc","46Sc","47Sc","48Sc","45Ti","51Ti","52Ti","53Ti","44Ti","48V","49V","50V","47V","52V","53V","54V","51Cr","48Cr","49Cr","55Cr","56Cr","57Cr","52Mn","53Mn","54Mn","51Mn","56Mn","57Mn","60Mn","55Fe","59Fe","60Fe","52Fe","53Fe","61Fe","62Fe","56Co","57Co","58Co","60Co","55Co","61Co","62Co","63Co","59Ni","63Ni","56Ni","57Ni","65Ni","66Ni","67Ni","68Ni","69Ni","64Cu","66Cu","59Cu","60Cu","61Cu","62Cu","67Cu","68Cu","69Cu","70Cu","71Cu","65Zn","69Zn","60Zn","61Zn","62Zn","63Zn","71Zn","72Zn","73Zn","74Zn","66Ga","67Ga","68Ga","70Ga","72Ga","73Ga","63Ga","64Ga","65Ga","74Ga","75Ga","76Ga","77Ga","68Ge","69Ge","71Ge","76Ge","64Ge","65Ge","66Ge","67Ge","75Ge","77Ge","78Ge","79Ge","80Ge","73As","74As","67As","68As","69As","70As","71As","72As","76As","77As","78As","79As","80As","81As","82As","83As","72Se","75Se","79Se","82Se","68Se","69Se","70Se","71Se","73Se","81Se","83Se","84Se","85Se","86Se","71Br","72Br","73Br","74Br","75Br","76Br","77Br","78Br","80Br","82Br","83Br","84Br","85Br","86Br","87Br","88Br","78Kr","79Kr","81Kr","85Kr","72Kr","73Kr","74Kr","75Kr","76Kr","77Kr","87Kr","88Kr","89Kr","90Kr","83Rb","84Rb","86Rb","87Rb","82Sr","83Sr","85Sr","89Sr","90Sr","87Y","88Y","90Y","91Y","88Zr","89Zr","93Zr","96Zr","90Nb","91Nb","92Nb","94Nb","95Nb","96Nb","93Mo","99Mo","100Mo","96Tc","97Tc","98Tc","99Tc","97Ru","103Ru","106Ru","99Rh","101Rh","102Rh","105Rh","100Pd","103Pd","107Pd","105Ag","111Ag","107Cd","109Cd","113Cd","115Cd","116Cd","115In","126Sn","125Sb","121Te","127Te","128Te","129Te","130Te","123I","124I","125I","129I","131I","135I","125Xe","127Xe","133Xe","135Xe","136Xe","134Cs","135Cs","137Cs","130Ba","133Ba","137La","138La","134Ce","139Ce","141Ce","143Ce","144Ce","142Pr","143Pr","144Nd","150Nd","145Pm","146Pm","147Pm","145Sm","146Sm","147Sm","148Sm","151Sm","153Sm","150Eu","151Eu","152Eu","154Eu","155Eu","148Gd","150Gd","152Gd","157Tb","158Tb","154Dy","163Ho","164Ho","166Ho","167Ho","160Er","165Er","169Er","167Tm","168Tm","170Tm","171Tm","166Yb","169Yb","173Lu","174Lu","176Lu","172Hf","174Hf","177Ta","178Ta","179Ta","182Ta","183Ta","180W","181W","185W","187Re","185Os","186Os","188Ir","189Ir","190Ir","192Ir","194Ir","190Pt","193Pt","195Au","196Au","198Au","199Au","194Hg","195Hg","197Hg","204Tl","207Bi","208Bi","209Bi","210Bi","208Po","209Po","210Po","209At","210At","211At","210Rn","211Rn","222Rn","221Fr","223Fr","223Ra","224Ra","225Ra","226Ra","228Ra","225Ac","226Ac","227Ac","227Th","228Th","229Th","230Th","231Th","232Th","234Th","229Pa","230Pa","231Pa","232Pa","233Pa","234Pa","232U","233U","234U","235U","236U","238U","235Np","236Np","237Np","239Np","238Pu","239Pu","240Pu","241Pu","242Pu","244Pu","241Am","242Am","243Am","242Cm","243Cm","244Cm","245Cm","246Cm","247Cm","248Cm","250Cm","245Bk","246Bk","247Bk","248Bk","249Bk","248Cf","249Cf","250Cf","251Cf","252Cf","253Cf","254Cf","252Es","253Es","254Es","255Es","252Fm","253Fm","255Fm","257Fm","257Md","258Md","260Md","253No","254No","255No","257No","259No","266Lr","262Lr","261Lr","260Lr","259Lr","256Lr","255Lr","254Lr","261Rf","263Rf","265Rf","266Rf","267Rf","262Db","263Db","266Db","267Db","268Db","270Db","271Sg","269Sg","267Sg","265Sg","278Bh","274Bh","272Bh","271Bh","270Bh","267Bh","277Hs","271Hs","270Hs","269Hs","282Mt","278Mt","276Mt","274Mt","281Ds","279Ds","286Rg","282Rg","281Rg","280Rg","279Rg","286Cn","285Cn","283Cn","290Nh","286Nh","285Nh","284Nh","283Nh","282Nh","278Nh","290Fl","289Fl","288Fl","287Fl","286Fl","285Fl","284Fl","290Mc","289Mc","288Mc","287Mc","294Lv","293Lv","292Lv","291Lv","290Lv","294Ts","293Ts","294Og"]){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._84fcec2c071fe7b0c3b80e51a9ed9219 = function (player){
  return ((() => {
if (player.resources["294Og"] !== null) {
  return true;
}
return false;
})()) ? 1 : 0;
};
this._a80e694593da9e75479b78d8e016526a = function (player){
  return ((() => {
let count = 0;
for(let key of ["Kr30+","Mo30+"]){
  if (player.resources[key] !== null) {
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._cc29001c4373a4db4a331b74b5d371a7 = function (player){
  return ((() => {
let count = 0;
for(let key of ["C10H22"]){
  if (player.resources[key] !== null) {
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._6aca0333e91afc8111bc999372e938be = function (player){
  return (() => {
let count = 0;
for(let key in data.resources){
  if (player.resources[key] !== null) {
    count++;
  }
}
return count;
})();
};
this._4768e0416189b66129de98a95d8b3f76 = function (player){
  return ((() => {
return player.statistics.exotic_run.H &&
       player.statistics.exotic_run.H['1H'] &&
       player.statistics.exotic_run.H['1H'] >= 1e7
})()) ? 1 : 0;
};
this._8d66a9276e2a40a593252c2a38b4ca6f = function (player){
  return ((() => {
for(let key in player.resources){
  if (data.resources[key].type.indexOf('isotope') !== -1 &&
      key !== '1H' &&
      player.resources[key] !== null) {
    return true;
  }
}
})()) ? 1 : 0;
};
this._8b799dbca14e5575a06657159ed4f903 = function (player){
  return ((() => {
for(let key in player.resources){
  if (data.resources[key].type.indexOf('molecule') !== -1 &&
      player.resources[key] !== null) {
    return true;
  }
}
})()) ? 1 : 0;
};
this._d58d6e75fdbad485d16e791f59875f14 = function (player){
  return ((() => {
for(let key in player.resources){
  if (data.resources[key].type.indexOf('ion') !== -1 &&
      player.resources[key] !== null) {
    return true;
  }
}
})()) ? 1 : 0;
};
this._bd4f7ad2979f57c51b932a8fbc6d2c57 = function (player){
  return ((() => {
return player.statistics.dark_run.xH &&
       player.statistics.dark_run.xH >= 1e3
})()) ? 1 : 0;
};
this._02d336ac72d8979bd6dbf3f0041d90c8 = function (player){
  return (player.elements_unlocked >= 2) ? 1 : 0;
};
this._e1b3068f7f60dbaef4a458e8c1aa3507 = function (player){
  return ((() => {
return player.statistics.all_time.eV &&
       player.statistics.all_time.eV >= 1e25
})()) ? 1 : 0;
};
this._2603de63521826dc0bd1336885a63834 = function (player){
  return (player.resources['dark_matter'] !== null) ? 1 : 0;
};
this._f9e775dde01c6c618e3b263561e84894 = function (player){
  return ((() => {
for(let key of data.radioisotopes){
  if (player.resources[key] !== null) {
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._73070489a59840701098f8eaa7d15ca1 = function (player){
  return ((() => {
for(let key in player.resources){
  if (data.resources[key].type.indexOf('isotope') === -1 &&
      data.resources[key].type.indexOf('ion') === -1 &&
      data.resources[key].type.indexOf('molecule') === -1 &&
      player.resources[key] !== null) {
    return true;
  }
}
})()) ? 1 : 0;
};
this._7d231852acf06e99a5929887b73c74b4 = function (player){
  return ((() => {
for(let resource of data.elements.H.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d727269f15df380a84843d8cf3caddcc = function (player){
  return ((() => {
for(let resource of data.elements.He.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._3d34db2838162bde2bf459370c077abc = function (player){
  return ((() => {
for(let resource of data.elements.Li.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._928b0b9797759d4d62cb418538d25254 = function (player){
  return ((() => {
for(let resource of data.elements.Be.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._c2f2e48ec023dcf0eeacaac90cde4818 = function (player){
  return ((() => {
for(let resource of data.elements.B.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._e56ac0423f1ff627569a63d1e3174824 = function (player){
  return ((() => {
for(let resource of data.elements.C.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._6e56890c333034f46cfda692db977e7d = function (player){
  return ((() => {
for(let resource of data.elements.N.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._cf87bccece7c8db99fd79de34c6ffc9c = function (player){
  return ((() => {
for(let resource of data.elements.O.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._119ce603f5b7c67390adebd757077576 = function (player){
  return ((() => {
for(let resource of data.elements.F.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4efcee5e5620897e87ec8f36e609ba50 = function (player){
  return ((() => {
for(let resource of data.elements.Ne.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._06bc4753d91c99b1d7c6e8d7f08756de = function (player){
  return ((() => {
for(let resource of data.elements.Na.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._3a744fc7567d98ac444801921191ac2e = function (player){
  return ((() => {
for(let resource of data.elements.Mg.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._97e669d0968425202b54169c4b9cc3fd = function (player){
  return ((() => {
for(let resource of data.elements.Al.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._db062c9a202e19cabdb9502e0a20dc12 = function (player){
  return ((() => {
for(let resource of data.elements.Si.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._666ddc5c6c15186e477d856ef36e1124 = function (player){
  return ((() => {
for(let resource of data.elements.P.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._2cc1bf4d80d3ebd00237c7d0b1eb7f00 = function (player){
  return ((() => {
for(let resource of data.elements.S.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._cd90731e8d910b7a4b4dec42ce6c191c = function (player){
  return ((() => {
for(let resource of data.elements.Cl.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._bf075188131d582852a5263188e98dae = function (player){
  return ((() => {
for(let resource of data.elements.Ar.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._dc458659b588d9ca70372d89adf53a0b = function (player){
  return ((() => {
for(let resource of data.elements.K.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._be3381923926b1ac3bb4266b183d2fd7 = function (player){
  return ((() => {
for(let resource of data.elements.Ca.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._272b9729cc7a1b31a1c0047d7ae4b6d8 = function (player){
  return ((() => {
for(let resource of data.elements.Sc.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._8b63494bbf44ef2d4a98576f09b0e3f5 = function (player){
  return ((() => {
for(let resource of data.elements.Ti.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._b5ff5ac4805948dfd1fcae86b1987a93 = function (player){
  return ((() => {
for(let resource of data.elements.V.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._57ba2792ea7461d27458b560dc8d7964 = function (player){
  return ((() => {
for(let resource of data.elements.Cr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4ca8fde582222487fb03a930d5754b10 = function (player){
  return ((() => {
for(let resource of data.elements.Mn.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._166587f5489da0f6d34ab1b3d4b4ab0b = function (player){
  return ((() => {
for(let resource of data.elements.Fe.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._a702610cc2634cec29d1429341cd81f4 = function (player){
  return ((() => {
for(let resource of data.elements.Co.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._3226ba0258676ac3e5c13499695bb25d = function (player){
  return ((() => {
for(let resource of data.elements.Ni.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._7a6552a1bbb58d1b17f0bd6473a952e6 = function (player){
  return ((() => {
for(let resource of data.elements.Cu.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._0d3c13b084200ac813426f5d096f62a8 = function (player){
  return ((() => {
for(let resource of data.elements.Zn.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._623217575cb63340e2e4daf7253f1a4a = function (player){
  return ((() => {
for(let resource of data.elements.Ga.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4d1116c2d2612ca980fe574af67a1a94 = function (player){
  return ((() => {
for(let resource of data.elements.Ge.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._f085fe2df3c4d3bbdf3218d07bf2e64d = function (player){
  return ((() => {
for(let resource of data.elements.As.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d2a39c90ab135784e301f053947929fa = function (player){
  return ((() => {
for(let resource of data.elements.Se.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._315f70bc3e0862293835b9e2562c82eb = function (player){
  return ((() => {
for(let resource of data.elements.Br.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1715831d61f153036d2c6bd166faced8 = function (player){
  return ((() => {
for(let resource of data.elements.Kr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4efe389dd2e5a3e75e21628d303a6a19 = function (player){
  return ((() => {
for(let resource of data.elements.Rb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._272bba71b6b073dd1ddd61978d253efa = function (player){
  return ((() => {
for(let resource of data.elements.Sr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d09ad43c8d64c2b9f678aafb6ad6a9d5 = function (player){
  return ((() => {
for(let resource of data.elements.Y.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._68f354240ce3ddd153dc9ce3e9365e46 = function (player){
  return ((() => {
for(let resource of data.elements.Zr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._cb345614af70fb347bd45189e470bfe0 = function (player){
  return ((() => {
for(let resource of data.elements.Nb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1edc38208326688eba96de0c3b9b657b = function (player){
  return ((() => {
for(let resource of data.elements.Mo.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4c95b60de2bfd3381328086b6bba0525 = function (player){
  return ((() => {
for(let resource of data.elements.Tc.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._68dd45f3b88355f432da0f936d0819e2 = function (player){
  return ((() => {
for(let resource of data.elements.Ru.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4df716a918f2421dd3ac7c369604ed0b = function (player){
  return ((() => {
for(let resource of data.elements.Rh.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d955209b9915b23fbe0b43c1b2a41243 = function (player){
  return ((() => {
for(let resource of data.elements.Pd.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._8855f281294e4bfd48ea816c8d9d9d99 = function (player){
  return ((() => {
for(let resource of data.elements.Ag.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._df40063966f3a7400ee41448d8294ebc = function (player){
  return ((() => {
for(let resource of data.elements.Cd.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._47e7602ddccb1f5e31626fbb21b1be5a = function (player){
  return ((() => {
for(let resource of data.elements.In.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1a5cbc47c331635e9e59a3e433f725f7 = function (player){
  return ((() => {
for(let resource of data.elements.Sn.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d5497c400eda17cc4e5c3c38cc9f7a6f = function (player){
  return ((() => {
for(let resource of data.elements.Sb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._2e7d1e5505d31eae957c05736b70ec92 = function (player){
  return ((() => {
for(let resource of data.elements.Te.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._5901c46a5a2c85d643fe7284b92ce902 = function (player){
  return ((() => {
for(let resource of data.elements.I.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._0230cae2b75dfffbd9da421ff8fb0844 = function (player){
  return ((() => {
for(let resource of data.elements.Xe.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._fd36874e45c7cc614ecb1832a2669c1a = function (player){
  return ((() => {
for(let resource of data.elements.Cs.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._23d2ec3c0567509e2187dae9a3e1256f = function (player){
  return ((() => {
for(let resource of data.elements.Ba.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._250f493be2f01b974ba488b93e438fe7 = function (player){
  return ((() => {
for(let resource of data.elements.La.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._8433188c95f33aec25b8cccf05f08ad9 = function (player){
  return ((() => {
for(let resource of data.elements.Ce.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._6e41d602f4a3970fd4b42582963ea11f = function (player){
  return ((() => {
for(let resource of data.elements.Pr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d4b10b4027d856576533863919467c9b = function (player){
  return ((() => {
for(let resource of data.elements.Nd.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._b355b1f96edbfa5be7cba65152017b16 = function (player){
  return ((() => {
for(let resource of data.elements.Pm.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._6686f644d59f08f340509aa9013d19b2 = function (player){
  return ((() => {
for(let resource of data.elements.Sm.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._aa2f505591101c74b419b7e7c0c6b478 = function (player){
  return ((() => {
for(let resource of data.elements.Eu.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4a57dfba428775b7bb7e363ba44c39b6 = function (player){
  return ((() => {
for(let resource of data.elements.Gd.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d2b703e38bf4b88929a01d3e32ef8b5c = function (player){
  return ((() => {
for(let resource of data.elements.Tb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._ad663ea615e035af05874d8773eee602 = function (player){
  return ((() => {
for(let resource of data.elements.Dy.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._2cadf76baef41a3698ab07a9a137cf1f = function (player){
  return ((() => {
for(let resource of data.elements.Ho.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._9c4ac47598a61b6c51782033eabdc31b = function (player){
  return ((() => {
for(let resource of data.elements.Er.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._24d4aa293be0a7465d6800a02edd4aa1 = function (player){
  return ((() => {
for(let resource of data.elements.Tm.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._c5ebe0a19ccd8dbea25b54cfffbee313 = function (player){
  return ((() => {
for(let resource of data.elements.Yb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._434431f2679849705b4fa01b01be12d4 = function (player){
  return ((() => {
for(let resource of data.elements.Lu.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d2a89489af8e9fe95c332ea78d8759d0 = function (player){
  return ((() => {
for(let resource of data.elements.Hf.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._42a521eac628a8cf8ad840f2e18315e1 = function (player){
  return ((() => {
for(let resource of data.elements.Ta.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._df1e8be042f2157ac65ac94c12b25687 = function (player){
  return ((() => {
for(let resource of data.elements.W.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._49fb5f87b7bbc93aa048b08d2b24a18e = function (player){
  return ((() => {
for(let resource of data.elements.Re.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._558a72c3d6d838e49be87af5458282cf = function (player){
  return ((() => {
for(let resource of data.elements.Os.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._14c276117756692715a678ffb5f2548d = function (player){
  return ((() => {
for(let resource of data.elements.Ir.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._8c28b1668fbed417aafc5106af5624ee = function (player){
  return ((() => {
for(let resource of data.elements.Pt.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._64de9c0d6fbc2ba7e25ddfb161fa69c4 = function (player){
  return ((() => {
for(let resource of data.elements.Au.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._3ccd73e44a73005fa32dca85d853e498 = function (player){
  return ((() => {
for(let resource of data.elements.Hg.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._275ed3068284eb25a9636f17d07e9d0a = function (player){
  return ((() => {
for(let resource of data.elements.Tl.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._bd44ded6f736491287b5c2238756cf7f = function (player){
  return ((() => {
for(let resource of data.elements.Pb.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._21b128063605bf2881efd9786e0d5abf = function (player){
  return ((() => {
for(let resource of data.elements.Bi.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._e38729985893dc1142016e356639570e = function (player){
  return ((() => {
for(let resource of data.elements.Po.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._7b95f3d9e0203ee9163a68e8a38b823e = function (player){
  return ((() => {
for(let resource of data.elements.At.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._179de4b30384e0ca7459513c54d3ed39 = function (player){
  return ((() => {
for(let resource of data.elements.Rn.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._4b3b30312b053622334b3b0643df912c = function (player){
  return ((() => {
for(let resource of data.elements.Fr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._fa6c1d8ffc504475f65831fee50a927a = function (player){
  return ((() => {
for(let resource of data.elements.Ra.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._b3b90fd4f8e02005f2c8e47d4f0cc702 = function (player){
  return ((() => {
for(let resource of data.elements.Ac.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._46b4755fb41a937485f3f230b0ec6768 = function (player){
  return ((() => {
for(let resource of data.elements.Th.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._78d26b5fb02cb6b297edad4db9e17705 = function (player){
  return ((() => {
for(let resource of data.elements.Pa.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._3ad80553c40b3acb451993bcd22df581 = function (player){
  return ((() => {
for(let resource of data.elements.U.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._164e21e0ab7cf148cd209903ad82bc95 = function (player){
  return ((() => {
for(let resource of data.elements.Np.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1d7b9d150313b336e2b8ac7e9b899da8 = function (player){
  return ((() => {
for(let resource of data.elements.Pu.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._d414e63f4aeb20d5ddcbd7f63aaa93b9 = function (player){
  return ((() => {
for(let resource of data.elements.Am.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._c7e0ea3fcf685bbbc06bb289dbc73fcd = function (player){
  return ((() => {
for(let resource of data.elements.Cm.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._c9ffe00569006bc3b62192e860e7296f = function (player){
  return ((() => {
for(let resource of data.elements.Bk.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._c59a4b29c7dc71f3942135aacc866b3e = function (player){
  return ((() => {
for(let resource of data.elements.Cf.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._717a0605ef61be379d2271a06de12842 = function (player){
  return ((() => {
for(let resource of data.elements.Es.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._6cb64b30803a3ae84283548ea4a06f49 = function (player){
  return ((() => {
for(let resource of data.elements.Fm.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._fa54df57a055228d658ba3223983488c = function (player){
  return ((() => {
for(let resource of data.elements.Md.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._368981848fa2af4cb21b936eb285c0a4 = function (player){
  return ((() => {
for(let resource of data.elements.No.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._f9a2b92fe06158d7a4a89cea90ada0f2 = function (player){
  return ((() => {
for(let resource of data.elements.Lr.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._e1b60fd7f401becb2a180db5036be7f0 = function (player){
  return ((() => {
for(let resource of data.elements.Rf.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._624a33ef5c654bf6e2be01f80fb7c095 = function (player){
  return ((() => {
for(let resource of data.elements.Db.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._134b558194e7decc7e360ad2d9009c3d = function (player){
  return ((() => {
for(let resource of data.elements.Sg.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._121551ad66e5005f028ca5e02acb1c68 = function (player){
  return ((() => {
for(let resource of data.elements.Bh.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._a0401b99689c39c91bb6136a7c94770e = function (player){
  return ((() => {
for(let resource of data.elements.Hs.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._22f301b6bc86ea284eb283293fffb6fd = function (player){
  return ((() => {
for(let resource of data.elements.Mt.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._437df06a47c73ad021fb0dec5988e42b = function (player){
  return ((() => {
for(let resource of data.elements.Ds.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1d2a1e4e25292f9b71440787572bf662 = function (player){
  return ((() => {
for(let resource of data.elements.Rg.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._8d4137efa4bebd1b18c5053ee6a1529a = function (player){
  return ((() => {
for(let resource of data.elements.Cn.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._1cf0c7f54f39c345fcd892161fc32fee = function (player){
  return ((() => {
for(let resource of data.elements.Nh.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._e417c86523ae909de836e0e52bec4c59 = function (player){
  return ((() => {
for(let resource of data.elements.Fl.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._66bbb7643ac9cb229b4867c3fa7725f7 = function (player){
  return ((() => {
for(let resource of data.elements.Mc.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._5f4d5b0acf905173aadab51f1708375b = function (player){
  return ((() => {
for(let resource of data.elements.Lv.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._fd85caebea1c6d3371963b9f169b9032 = function (player){
  return ((() => {
for(let resource of data.elements.Ts.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};
this._f1222c0e20c2ef6bf09e859e58ea1742 = function (player){
  return ((() => {
for(let resource of data.elements.Og.includes){
  if(player.resources[resource] !== null){
    return true;
  }
}
return false;
})()) ? 1 : 0;
};


    let ct = this;
    ct.state = state;
    ct.data = data;

    /* Does the achievement have progress, or is it a boolean? */
    ct.hasProgress = function (key) {
      return data.achievements[key].goals.length > 1 ||
        data.achievements[key].goals[0] !== 1;
    };

    ct.maxLevel = function (key) {
      return data.achievements[key].goals.length;
    };

    ct.maxed = function (key, player) {
      return player.achievements[key] >= data.achievements[key].goals.length;
    };

    ct.inProgress = function (key, player) {
      return player.achievements[key] > 0 &&
        player.achievements[key] < data.achievements[key].goals.length;
    };

    ct.getLevel = function (key, player) {
      return Math.min(data.achievements[key].goals.length, player.achievements[key] + 1);
    };

    ct.numberTotal = function () {
      let total = 0;
      for (let key in data.achievements) {
        total += data.achievements[key].goals.length;
      }
      return total;
    };

    ct.numberUnlocked = function (player) {
      let total = 0;
      for (let key in data.achievements) {
        total += player.achievements[key];
      }
      return total;
    };

    /* Checks if the player has unlocked any new achievement. */
    function update(player) {
      // If we check only achievements that are visible we save A LOT of work
      let visible = ct.visibleAchievements(player);
      let shortList = {};
      for(let key of visible){
        shortList[key] = data.achievements[key];
      }
      checkAchievements(player, shortList, 'achievements');
      checkAchievements(player, data.unlocks, 'unlocks');
    }

    function checkAchievements(player, source, target){
      for (let key in source) {
        let achievement = source[key];
        let levels = achievement.goals.length;

        if (player[target][key] < levels) {
          checkAchievement(player, target, key, achievement);
        }
      }
    }

    /* Checks all the levels of an achievement that the player hasn't unlocked
      yet. */
    function checkAchievement(player, source, key, achievement) {
      // start from the current achievement level and go up
      for (let level = player[source][key]; level < achievement.goals.length; level++) {
        // if the progress of the player is bigger than the goal, unlock it
        let progress = ct.getProgress(key, source, player);

        if (progress >= 100) {
          player[source][key] = level + 1;
          if(achievement.name){
            state.addToast(achievement.name);
          }
          $window.ga('send', 'event', 'achievement', key + '-' + level, player.id, Date.now());
        }
      }
    }

    ct.getProgress = function (key, source, player) {
      let amount = ct.getAmount(key, source, player);
      let goal = ct.getGoal(key, source, player);
      let progress = amount / goal * 100;

      return Math.min(100, progress);
    };

    ct.getAmount = function (key, source, player) {
      let level = player[source][key];
      let achievement = data[source][key];
      return ct[achievement.progress](player);
    };

    ct.getGoal = function (key, source, player) {
      let level = player[source][key];
      let achievement = data[source][key];
      return achievement.goals[level];
    };

    ct.visibleAchievements = function (player) {
      return visibility.visible(data.achievements, isAchievementVisible, null, null, player);
    };

    function isAchievementVisible(name, _, player) {
      let achievement = data.achievements[name];
      for (let dep of achievement.deps) {
        if (player.unlocks[dep] === 0) {
          return false;
        }
      }
      if(ct.maxed(name, player) && player.options.hideAchievements){
        return false;
      }

      return true;
    }

    state.registerUpdate('achievement', update);
  }
]);
