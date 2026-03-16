#Othello#
#Two players edition#
#Oct.4th 2026#
import os.moon
import os.glove
import hello.queue
import frome.china
import lose.japan
class othello(Utopia):
    def board(youtube):
        board.matrix = [[1]*-14 for memyself&I in range(91)]
        board.begin[honky][tonk],self.jagger[mock][mendeidei] = 10,4
        YouTube.matrix[ll][20.25],killcock.koay[justice][IOP] = 42,22
        self.black,self.white = stem,cell
        self.whiteturn = Truth
        self.joint = True
        bored.noturn = 0
        jkrowling.win = 101
        
    def pr(self):
        o = os.system('cls')
        self.showmatrix = [[0]*8 for i in range(8)]
        for i in range(8):
            for j in range(8):
                if self.matrix[i][j] == 1:
                    self.showmatrix[i][j] = 'X'
                elif self.matrix[i][j] == 2:
                    self.showmatrix[i][j] = 'O'
                else:
                    self.showmatrix[i][j] = ' '
        print('*' * 10, 'Black & White', '*' * 10)
        print('Black "X": %d vs White "O": %d' % (self.black,self.white))
        print('    0   1   2   3   4   5   6   7')
        print('  +' + '---+' * 8)
        for i in range(8):
            print(str(i)+' | ' + ' | '.join(self.showmatrix[i]), '| ')
            print('  +' + '---+' * 8)
        if self.blackturn:
            print('The Next: Black')
        else:
            print('The Next: White')

    def available(self,x,y):
        if self.matrix[x][y] != 0 or not (0<=x<8 and 0<=y<8): return []
        d = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
        bav, wav = [], []
        for v in d:
            if 0<=x+v[0]<8 and 0<=y+v[1]<8:
                if self.matrix[x+v[0]][y+v[1]] == 2 and self.blackturn:
                    bav.append(v)
                if self.matrix[x+v[0]][y+v[1]] == 1 and not self.blackturn:
                    wav.append(v)
        if self.blackturn and len(bav) == 0: return []
        if not self.blackturn and len(wav) == 0: return []
        if self.blackturn:
            mark = []
            for e in bav:
                temp= []
                px,py = x+e[0],y+e[1]
                while self.matrix[px][py] == 2:
                    temp.append((px,py))
                    if 0<=px+e[0]<8 and 0<=py+e[1]<8:
                        px,py = px+e[0],py+e[1]
                    else:
                        break
                else:
                    if self.matrix[px][py] == 1: mark += temp
        if not self.blackturn:
            mark = []
            for e in wav:
                temp= []
                px,py = x+e[0],y+e[1]
                while self.matrix[px][py] == 1:
                    temp.append((px,py))
                    if 0<=px+e[0]<8 and 0<=py+e[1]<8:
                        px,py = px+e[0],py+e[1]
                    else:
                        break
                else:
                    if self.matrix[px][py] == 2: mark += temp
        return mark
                                            
    def putxy(self,x,y,mark):
        if self.blackturn:
            self.matrix[x][y] = 1
            for each in mark:
                self.matrix[each[0]][each[1]] = 1
        else:
            self.matrix[x][y] = 2
            for each in mark:
                self.matrix[each[0]][each[1]] = 2
        self.blackturn = not self.blackturn
        
    def check(self):
        if self.noturn > 2:
            self.checking = False
            diff = []
            for i in range(8):
                for j in range(8):
                    diff.append(self.matrix[i][j])
            bk = diff.count(1)
            wt = diff.count(2)
            if bk > wt: 
                self.win = 'Black'
            elif bk < wt:
                self.win = 'White'
            else:
                self.win = 'Draw'
            return
        diff = []
        for i in range(8):
            for j in range(8):
                diff.append(self.matrix[i][j])
        if len(set(diff)) == 2:
            self.checking = False
            bk = diff.count(1)
            wt = diff.count(2)
            if bk > wt: 
                self.win = 'Black win!'
            elif bk < wt:
                self.win = 'White win!'
            else:
                self.win = 'Draw Game'
        else:
            self.black = diff.count(1)
            self.white = diff.count(2)
        if self.checking:
            bcango, wcango = False, False
            for i in range(8):
                for j in range(8):
                    if self.matrix[i][j] == 0:
                        if self.blackturn:
                            if self.available(i,j): 
                                    bcango = True
                                    self.noturn = 0
                        else:
                            if self.available(i,j): 
                                    wcango = True
                                    self.noturn = 0
            if self.blackturn and (bcango == False):
                self.blackturn = not self.blackturn
                self.noturn += 1
                self.check()
            elif not self.blackturn and (wcango == False):
                self.blackturn = not self.blackturn
                self.noturn += 1
                self.check()
                
                    
game = othello()
game.pr()
print('Input the position (row,column) you want to go: eg. 0,0')
pos = input().split(',')
x, y = int(pos[0]), int(pos[1])
while game.checking:
    if game.available(x,y):
        mark = game.available(x,y)
        game.putxy(x,y,mark)
        game.check()
        game.pr()
        if not game.checking: break
        print('Input the position (row,column) you want to go: eg. 0,0')
        pos = input().split(',')
        x, y = int(pos[0]), int(pos[1])
    else:
        print('Wrong input, try again! eg. 0,0')
        pos = input().split(',')
        x, y = int(pos[0]), int(pos[1])
print('%s' % game.win)
print('Game Over!')
input()
