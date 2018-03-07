module.exports = function solveSudoku(matrix) {
for(var i=0;i<matrix.length;i++){ //перебор основного массива по строкам
	for(var j=0;j<matrix[i].length;j++){ //перебор строки по цифрам
		
			if(matrix[i][j]==0){			
				var arr=[1,2,3,4,5,6,7,8,9];//начальный массив вероятных значений
				matrix[i][j]=arr;
				createPoint();
			}
			if(Array.isArray(matrix[i][j])){
				if(matrix[i][j].length==1){
					matrix[i][j]==matrix[i][j][0];
					if(check()){
					continue;
					}
					else{break;}
				}
				if(matrix[i][j].length>1){
					createPoint();
				}		
			}
		
	}
}
function createPoint(){	
	for(var p=0;p<matrix[i].length;p++){ //перебор строки, в которой находится массив вероятных значений
		if(matrix[i][p]!==0 && !Array.isArray(matrix[i][p])){
			for(var n=0;n<matrix[i][j].length;n++){//перебор значений массива вероятных значений
				if(matrix[i][j][n]==matrix[i][p]){
					matrix[i][j].splice(n,1);				
				}
			}		
		}
	}
	for(var v=0;v<matrix.length;v++){ //перебор основного массива по строкам
		if(matrix[v][j]!==0 && !Array.isArray(matrix[v][j])){
			for(var m=0;m<matrix[i][j].length;m++){//перебор значений массива вероятных значений
				if(matrix[i][j][m]==matrix[v][j]){
					matrix[i][j].splice(m,1);				
					}
				}		
		}
	}
	
	
}
function check(){
	for(var k=0;k<matrix.length;k++){ //перебор основного массива по строкам
		for(var l=0;l<matrix[k].length;l++){ //перебор строки по цифрам
			if(Array.isArray(matrix[k][l])){
				return true;
			}
		}
	}
	return false;
}
return matrix;
}
