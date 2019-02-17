/**
 upgrade
 Auxiliary services aimed to reduce duplication. The behaviour for upgrades,
 exotic upgrades and dark upgrades is almost the same. Also, both prestige loops
 require to reset an element.

 @namespace Services
 */
'use strict';

angular
  .module('game')
  .service('upgrade', ['data', 'util', '$controller', 'state', 'visibility',
    function(data, util, $controller, state, visibility) {
      let sv = this;

      this._a011050fd1eca0ee26f10b22d2661b3d = function (args){
  return (() => {
args.production*=2;
})();
};
this._12b7d762b4a5ce0b6b6ff85c8400ed93 = function (args){
  return (() => {
args.production*=3;
})();
};
this._e3dc1d2ea0b7418ac1a5c8a96a712749 = function (args){
  return (() => {
args.production*=4;
})();
};
this._9e3f571b51b1075ec3ddaa0244d51fa5 = function (args){
  return (() => {
args.production*=5;
})();
};
this._54f9294e1819f678fbacd3e67adeee23 = function (args){
  return (() => {
args.production*=6;
})();
};
this._8877b5190b95f17b8ddeb736281ea03d = function (args){
  return (() => {
args.production*=7;
})();
};
this._46d9768dab852dc45606509b49603e8d = function (args){
  return (() => {
args.production*=8;
})();
};
this._06908dec36233bb873a51ce0c6ac116d = function (args){
  return (() => {
args.production*=9;
})();
};
this._8fdd2c16506eeab1abeef35defce1be7 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['1']/10)*0.05);
})();
};
this._de98bc5d100d0100c3d4e773648b84cb = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['2']/10)*0.05);
})();
};
this._479c39e47c8e2de0772e68870e60f47d = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['3']/10)*0.05);
})();
};
this._21211702e4c2985a29663cc9a8ee759a = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['4']/10)*0.05);
})();
};
this._f5774031370a9a1c5eb07d2c8a6656d2 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['5']/10)*0.05);
})();
};
this._de38fa4df1e7cb1fe9c2ab0d09765b5c = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['6']/10)*0.05);
})();
};
this._da1f1b0f1a609c9f4e7d3980c780eb51 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['7']/10)*0.05);
})();
};
this._bab7ce159723d2ebb4ea3497b70816b0 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['8']/10)*0.05);
})();
};
this._c5c8478ac2186ea79705566cb8ff4bee = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['9']/10)*0.05);
})();
};
this._15fa9c6fe6483fdf0c6ef8c720c4a09f = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['10']/10)*0.05);
})();
};
this._e1edd89a27af3fd3b37051692b732e97 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['1']/25)*0.25);
})();
};
this._1ada7121cf92672bdcf3398697b8e5fc = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['2']/25)*0.25);
})();
};
this._c0f339476b61c4cc66c0a24d9e0fa301 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['3']/25)*0.25);
})();
};
this._24733d5757a3bf1f2afa2259a121750d = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['4']/25)*0.25);
})();
};
this._93fa79d00d15796eb7e5325a35896d97 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['5']/25)*0.25);
})();
};
this._9c12722d6755dd2815013ca53cedddfc = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['6']/25)*0.25);
})();
};
this._494b457f387a03d548c65ce85020fc9e = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['7']/25)*0.25);
})();
};
this._84213b31c239d679cf91f0bebd31a95f = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['8']/25)*0.25);
})();
};
this._7b8a4746a40c15ffba931cf324eadefc = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['9']/25)*0.25);
})();
};
this._879218453ab7ea7ea41500974d4b1146 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['10']/25)*0.25);
})();
};
this._ba43746025bdf18c6e03c921e7c4f0fb = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['1']/50)*1);
})();
};
this._95d94d8971c06ab70f98fb3198ba07d2 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['2']/50)*1);
})();
};
this._1c1f5a64c4859da41b968775c037beaf = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['3']/50)*1);
})();
};
this._2ec94f2cb7dd5da0f9736507a46cf09e = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['4']/50)*1);
})();
};
this._42431fae0e1e04de7ee885cdf01b52f7 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['5']/50)*1);
})();
};
this._2a4525edc4248683fef690a9766d3868 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['6']/50)*1);
})();
};
this._36d0115119d1fa8c33f105d973e6bd3f = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['7']/50)*1);
})();
};
this._a390e5a0cecc873d204866fc84c45148 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['8']/50)*1);
})();
};
this._1b2f641adf28a297da74341744d8b2cd = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['9']/50)*1);
})();
};
this._022ed72f9f48c6737217b4554481a3ac = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['10']/50)*1);
})();
};
this._ac627c99f49358da087fea1c4eddc5a9 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['1']/100)*2.5);
})();
};
this._548a70ec018c66e4b3509f575f6bc87e = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['2']/100)*2.5);
})();
};
this._35eff529d7d10a2a62452be36d6f11eb = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['3']/100)*2.5);
})();
};
this._9b206971225222d833a356d67e843c8c = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['4']/100)*2.5);
})();
};
this._2235c88a368c604ede383fe05fef3b4e = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['5']/100)*2.5);
})();
};
this._74724355255e1c5cd0229f2e99bd443b = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['6']/100)*2.5);
})();
};
this._4aec15bcb908d5e53bada30fb7cbcab6 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['7']/100)*2.5);
})();
};
this._f519e20e7a59e24b22fcdd401180c3d1 = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['8']/100)*2.5);
})();
};
this._3ac39bfab5874a55bca75d44c3d3867c = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['9']/100)*2.5);
})();
};
this._2c667f81f41294440356da0eed8a3a3b = function (args){
  return (() => {
args.production*=(1+Math.floor(args.slot.generators['10']/100)*2.5);
})();
};
this._6cf4a9a31314127a17cdf2e6a244f1f7 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['1']/100);
})();
};
this._c11bf59a5a8cdf15db8a71fa83237247 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['2']/100);
})();
};
this._6f55a5b05475ad77613474091b4f1fa0 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['3']/100);
})();
};
this._efdb3c0d50e34f95209a69214a9ca669 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['4']/100);
})();
};
this._137e36e5befe9d676f1a82ed689ed48c = function (args){
  return (() => {
args.production*=(1+args.slot.generators['5']/100);
})();
};
this._bd5f2f75dc83ddc878827b78b2708034 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['6']/100);
})();
};
this._2941db34fbb826a1fd6be37bfdc1d938 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['7']/100);
})();
};
this._537de3ce66d69a5113aa670df1e1aced = function (args){
  return (() => {
args.production*=(1+args.slot.generators['8']/100);
})();
};
this._a4ca750df59010e18944c74d599f7406 = function (args){
  return (() => {
args.production*=(1+args.slot.generators['9']/100);
})();
};
this._21124023859ea8449bbecbe3d67e35ff = function (args){
  return (() => {
args.production*=(1+args.slot.generators['10']/100);
})();
};
this._1b2fd50c18f642f1eb4249978db5e286 = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('isotope') !== -1){
  args.production*=2;
}
})();
};
this._994239c27ff733a5feb53ded2f3c0a00 = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('isotope') !== -1 &&
   data.resources[args.resource].decay){
  let halfLife = data.resources[args.resource].decay.half_life
  let magnitude = Math.max(0, Math.floor(Math.log10(halfLife)))
  args.production *= 1 + magnitude*0.1;
}
})();
};
this._505c99b8f9b8506abaeb96d65207fa6e = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('ion') !== -1){
  args.production*=2;
}
})();
};
this._74dd48b24879be9492959a083a11e1be = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('ion') !== -1){
  let charge = Math.abs(data.resources[args.resource].charge)
  args.production *= 1 + charge*0.1;
}
})();
};
this._f281af54ad13d425173a67c54b58a9bf = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('molecule') !== -1){
  args.production*=2;
}
})();
};
this._5e412cb9f41c9ed5f77a2300ca669c71 = function (args){
  return (() => {
if(data.resources[args.resource].type.indexOf('molecule') !== -1){
  let size = 0;
  for(let elem in data.resources[args.resource].elements){
    size += data.resources[args.resource].elements[elem];
  }
  args.production *= 1 + size*0.05;
}
})();
};
this._7d162e6b61b7426b5ec4d0dfe5936ddf = function (args){
  return (() => {
args.player.element_slots.push(null);
})();
};
this._7cfb6844c2bf7d14cc2cb7e3c8e9af2b = function (args){
  return (() => {
let upgrades = $controller('ct_upgrades');
for(let slot of args.player.element_slots){
  if(slot){
    let visibleUpgrades = [];
    for(let up in data.upgrades){
      if(visibility.isUpgradeVisible(up, slot, data.upgrades[up], args.player)) visibleUpgrades.push(up);
    }
    sv.buyAll(args.player, slot.upgrades, visibleUpgrades, data.upgrades, data.elements[slot.element].main);
  }
}
})();
};
this._8c71b44e432952f92a7a158f15c0818c = function (args){
  return (() => {
if(!args.player.options.autoBuyGenerators) return;
let generators = $controller('ct_generators');
for(let slot of args.player.element_slots){
  if(!slot) continue;
  let tierToBuy = '1';
  let bestRatio = 0;

  for (let gen in data.generators) {
    let level = slot.generators[gen];
    let price = data.generators[gen].price * Math.pow(data.generators[gen].price_exp, level);
    let power = generators.generatorProduction(args.player, gen, slot);
    if (power / price > bestRatio) {
      tierToBuy = gen;
      bestRatio = power / price;
    }
    // we want to stop at the first generator we haven't bought yet
    if (level === 0) {
      break;
    }
  }

  if (tierToBuy) {
    generators.buyGenerators(args.player, tierToBuy, slot, generators.buyAmount[args.player.options.buyIndex]);
  }
}
})();
};
this._ca5c561eaff092a63275ef0555ec1b77 = function (args){
  return (() => {
state.noload = true;
let exotic = $controller('ct_exotic');
state.noload = false;
exotic.update(args.player);
for(let slot of args.player.element_slots){
  if(!slot) continue;
  let production = exotic.productionSum(slot.element);
  for (let key in production) {
    util.addResource(args.player, 'dark', key, production[key], state);
  }
}
})();
};


      function update(player){
        sv.executeAll(data.dark_upgrades, player.dark_upgrades, ['cycle'], {player:player});
      }

      sv.buyUpgrade = function (player, upgrades, upgradeData, name, price, currency) {
        if (upgrades[name]) {
          return;
        }
        if (player.resources[currency] >= price) {
          player.resources[currency] -= price;
          upgrades[name] = true;
          let args = {player: player};
          sv.executeOnce(upgradeData, ['once'], args);
        }
      };

      sv.resetElement = function(player, element) {
        let resources = player.resources;
        for (let resource of data.elements[element].includes) {
          if(resources[resource] !== null){
            resources[resource] = 0;
          }
        }
      };

      sv.executeOnce = function(upgrade, tags, args) {
        for(let tag of tags){
          if((upgrade.tags || []).indexOf(tag) === -1){
            return;
          }
        }
        let func = upgrade.function;
        if(func){
          sv[func](args);
        }
      };

      sv.executeAll = function(upgradesData, playerUpgrades, tags, args){
		if(!playerUpgrades) return;
		
        for(let key in upgradesData){
          if(!playerUpgrades[key]){
            continue;
          }
          let upgrade = upgradesData[key];
          sv.executeOnce(upgrade, tags, args);
        }
      };

      sv.filterByTag = function(tag) {
        return (name) => data.global_upgrades[name].tags.indexOf(tag) !== -1;
      };

      sv.priceMultiplier = function (name, player) {
        let level = player.global_upgrades[name];
        return Math.ceil(Math.pow(data.global_upgrades[name].price_exp, level));
      };

      /* Global upgrades are non-resource specific, repeatable upgrades */
      sv.buyGlobalUpgrade = function (name, player) {
        if (!sv.canBuyGlobalUpgrade(name, player)) {
          return;
        }

        let up = data.global_upgrades[name];
        for (let currency in up.price) {
          let value = up.price[currency] * sv.priceMultiplier(name, player);
          player.resources[currency] -= value;
        }

        player.global_upgrades[name]++;
      };

      sv.canBuyGlobalUpgrade = function (name, player) {
        let up = data.global_upgrades[name];
        for (let currency in up.price) {
          let value = up.price[currency] * sv.priceMultiplier(name, player);
          if (player.resources[currency] < value) {
            return false;
          }
        }

        return true;
      };

      // tries to buy all the upgrades it can, starting from the cheapest
      sv.buyAll = function (player, playerUpgrades, visibleUpgrades, dataUpgrades, currency) {
        let cheapest;
        let cheapestPrice;
        
        do{
          cheapest = null;
          cheapestPrice = Number.MAX_VALUE;
          for(let up of visibleUpgrades){
            let price = dataUpgrades[up].price;
            if(!playerUpgrades[up] &&
              price <= player.resources[currency]){
              if(price < cheapestPrice){
                cheapest = up;
                cheapestPrice = price;
              }
            }
          }
          if(cheapest){
            sv.buyUpgrade(player,
              playerUpgrades,
              dataUpgrades[cheapest],
              cheapest,
              cheapestPrice,
              currency);
          }
        }while(cheapest);
      };

      sv.sortFunctions = function(data){
        return [
          function(a,b) {
            let compare = data[a].name.localeCompare(data[b].name, undefined, {numeric: true, sensitivity: 'base'});
            if(compare === 0) return data[a].price - data[b].price;
            return compare;
          },
          (a,b) => data[a].price - data[b].price
        ];
      };

      state.registerUpdate('upgrade_service', update);
    }
  ]);
