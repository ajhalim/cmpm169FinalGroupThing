var i = 0; //contatore del timer
var ciclo= 50; //durata del timer
var t = 0; //tempo

function preload()
{
	A = loadImage("A.png");
  AA = loadImage("AA.png");
	As = loadImage("As.png");
  AAs = loadImage("AAs.png");
  B = loadImage("B.png");
	BB = loadImage("BB.png");
	Bs = loadImage("Bs.png");
	BBs = loadImage("BBs.png");
  C = loadImage("C.png");
	CC = loadImage("CC.png");
	Cs = loadImage("Cs.png");
	CCs = loadImage("CCs.png");
	G = loadImage("G.png");
	GG = loadImage("GG.png");
	F = loadImage("F.png");
	FF = loadImage("FF.png");
	Fs = loadImage("Fs.png");
	FFs = loadImage("FFs.png");
	H = loadImage("H.png");
	HH = loadImage("HH.png"); 
	E = loadImage("E.png");
	EE = loadImage("EE.png");
	bottle1 = loadImage("bottle1.png");
	bottle2 = loadImage("bottle2.png");
	bottle3 = loadImage("bottle3.png");
	bottle4 = loadImage("bottle4.png");
	bottle5 = loadImage("bottle5.png");
	bottle6 = loadImage("bottle6.png");
	sfondo = loadImage("sfondo.jpg");
	
}


function setup()
{
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}


function draw()
{
	background(26, 118, 184);
	image(sfondo, 800, 700, 3200, 2500)
	
	fish(t*t/250, height - t/1);
	i++; //incremento la variabile del timer
	i = i % ciclo;
	t++; //incremento tempo
}


//visualizzare e animare lo sprite del gabbiano
function fish(x, y)
{
	//salvo la matrice del s.d.r.
	push();
	
	//sposto il s.d.r. (per spostare)
	translate(x, y);
	
	//bottle SINISTRO
	if (i < (ciclo/ 2))
	{image(bottle1, 200, 200, 200, 150);}
	else
	{image(bottle2, 200, 200, 200, 150);}
	if (i < (ciclo/ 2))
	{image(bottle3, 200, 200, 200, 150);}
	else
	{image(bottle4, 200, 200, 200, 150);}
	if (i < (ciclo/ 2))
	{image(bottle5, 200, 200, 200, 150);}
	else
	{image(bottle6, 200, 200, 200, 150);}
	
	//A SINISTRO
	if (i < (ciclo/ 2))
	{image(B, 0, 0, 200, 150);}
	
	else
	{image(BB, 0, 0, 200, 150);}
	
	//A2 SINISTRO
	if (i < (ciclo/ 2))
	{image(B, 2000, 300, 200, 150);}
	
	else
	{image(BB, 2000, 300, 200, 150);}
	
	if (i < (ciclo/ 2))
	{image(B, -400, -300, 200, 150);}
	
	else
	{image(BB, -400, -300, 200, 150);}
	
	//A SINISTRO
	if (i < (ciclo/ 2))
	{image(As, -500, -100, 200, 150);}
	
	else
	{image(AAs, -500, -100, 200, 150);}
	
	//C SINISTRO
	if (i < (ciclo/ 2))
	{image(C, 800, 200 , 200, 150);}
	
	else
	{image(CC, 800, 200, 200, 150);}
	
	if (i < (ciclo/ 2))
	{image(C, 1500, 1500 , 200, 150);}
	
	else
	{image(CC, 1500, 1500, 200, 150);}
	
	//Cs destro
	if (i < (ciclo/ 2))
	{image(Cs, (1200 - x)*2, 500 , 200, 150);}
	
	else
	{image(CCs, (1200 - x)*2, 500, 200, 150);}
	
	//Cs destro
	if (i < (ciclo/ 2))
	{image(Cs, (1900 - x)*2, 100 , 200, 150);}
	
	else
	{image(CCs, (1900 - x)*2, 100, 200, 150);}
	
	
	//B DESTRO
	if (i < (ciclo/ 2))
	{image(A, (1500 - x)*2, 100  , 200, 150);}
	
	else
	{image(AA, (1500 -x)*2 , 100 , 200, 150);}
	
	//Bs DESTRO
	if (i < (ciclo/ 2))
	{image(Bs, (1500 - x)*2, (250 - y) , 200, 150);}
	
	else
	{image(BBs, (1500 - x)*2 , (250 - y), 200, 150);}
	
	//G DESTRO
	if (i < (ciclo/ 2))
	{image(G, (2000 - x)*2, 200  , 200, 150);}
	
	else
	{image(GG, (2000 -x)*2 , 200 , 200, 150);}
	
	//G DESTRO
	if (i < (ciclo/ 2))
	{image(G, (4000 - x)*2, 400  , 200, 150);}
	
	else
	{image(GG, (4000 -x)*2 , 400 , 200, 150);}
	
	//G2 destro
	if (i < (ciclo/ 2))
	{image(G, (4000 - x)*2, 100  , 200, 150);}
	
	else
	{image(GG, (4000 -x)*2 , 100 , 200, 150);}
	
	//E SINISTRO
	if (i < (ciclo/ 2))
	{image(E, (-200+x), (-700+x), 200, 150);}
	
	else
	{image(EE, (-200+x), (-700+x) , 200, 150);}
	
	//E SINISTRO
	if (i < (ciclo/ 2))
	{image(E, (-600+x), (-1000+x), 200, 150);}
	
	else
	{image(EE, (-600+x), (-1000+x) , 200, 150);}
	
	//C up sinistro
	if (i < (ciclo/ 2))
	{image(C, (-2000+x)*2, (-1200+x), 200, 150);}
	
	else
	{image(CC, (-2000+x)*2, (-1200+x) , 200, 150);}
	
	//B up sinistro
	if (i < (ciclo/ 2))
	{image(B, (-700+x), (-600+x), 200, 150);}
	
	else
	{image(BB, (-700+x), (-600+x), 200, 150);}
	
	//C up sinistro
	if (i < (ciclo/ 2))
	{image(C, (-1000+x), (-1700+x), 200, 150);}
	
	else
	{image(CC, (-1000+x), (-1700+x) , 200, 150);}
	
	//F DESTRO
	if (i < (ciclo/ 2))
	{image(F, 400, 200  , 200, 150);}
	
	else
	{image(FF, 400, 200 , 200, 150);}
	
	//Fs sinistro
	if (i < (ciclo/ 2))
	{image(Fs, (1500 - x)*2, (-500), 200, 150);}
	
	else
	{image(FFs, (1500 - x)*2, (-500), 200, 150);}
	
	if (i < (ciclo/ 2))
	{image(Fs, (2000 - x)*2, (-200), 200, 150);}
	
	else
	{image(FFs, (2000 - x)*2, (-200), 200, 150);}
	
	if (i < (ciclo/ 2))
	{image(Fs, (1300 - x)*2, (-300), 200, 150);}
	
	else
	{image(FFs, (1300 - x)*2, (-300), 200, 150);}
	 
	//H SINISTRO
	if (i < (ciclo/ 2))
	{image(H, 150, 650 , 200, 150);}
	
	else
	{image(HH, 150, 650, 200, 150);}
	
	//H SINISTRO
	if (i < (ciclo/ 2))
	{image(H, 550, 450 , 200, 150);}
	
	else
	{image(HH, 550, 450, 200, 150);}
	
	
	//rimetto a posto il s.d.r. con:
	pop();
}
	


