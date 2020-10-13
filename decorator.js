
const Decorator = function(room){
    this.room = room;
    this.paintStock = [];
    
};
 Decorator.prototype.paintRoom = function(room){
     this.room.painted = true;
     return room.painted
 };


//prototype method - people and pets





module.exports = Decorator;