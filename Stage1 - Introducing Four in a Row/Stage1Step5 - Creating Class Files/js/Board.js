class Borad{
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createsSpaces();
    }


/** 
 * Generates 2D array of spaces.
 * @return  {array} An array of spaces objects
*/
 createsSpaces() {
    const spaces = [];
     for(let x = 0; x < this.colums ; x++) {
        const column = [];

        for(let y = 0; y < this.rows; y++) {
           const space = new Space(x, y);
           column.push(space);
        }
        spaces.push(column);
     }
     return spaces;
 }

}