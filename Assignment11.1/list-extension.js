var {LinkedList} = require('./list');


(
    function(){
        
        LinkedList.prototype._removeIndex=LinkedList.prototype.remove;
        
        LinkedList.prototype._removeSelected = function (matcher) {
            var removed = new LinkedList();
            var p = 0;
            
            for (var i = 0; i < this.size(); i++) {
                var v = this.get(i);
                var _matched = matcher(v, p);
                
                
                if (_matched === undefined) {
                    break;
                }
        
                if (_matched) {
                    removed.append(v);
                    this._removeIndex(i);
                    i--;
                    p++;
                }
            }
            return removed;
        };
        
        
        LinkedList.prototype.remove=function(param){
            if(typeof(param)==='function')
                return this._removeSelected(param);
            else
                return this._removeIndex(param);
        }

    }
)();

