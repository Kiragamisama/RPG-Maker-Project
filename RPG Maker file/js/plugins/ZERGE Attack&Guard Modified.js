/*:
 * @plugindesc Modify Normal Attack & Guard
 *
 * @author Zerge
 * 
 * @param attackID
 * @desc ID ของสกิลที่จะตั้งเป็น Normal Attack   
 * @default 1
 * 
 * @param guardID
 * @desc ID ของสกิลที่จะตั้งเป็น Guard  
 * @default 2
 * 
 */

(function () {
    var param = PluginManager.parameters('ZERGE Attack&Guard Modified');
    var attackID = parseInt(param['attackID']) || 1
    var guardID = parseInt(param['guardID']) || 2

    Game_Action.prototype.setAttack = function () {
        this._item.setObject($dataSkills[attackID]);
    };

    Game_Action.prototype.setGuard = function () {
        this._item.setObject($dataSkills[guardID]);
    };
})()