function homesForSale(title,image, address, forsale, price, zestimate, comment, mortgage){
	this.image = image,
	this.address = address,
	this.forsale = forsale,
	this.price = price,
	this.zestimate = zestimate,
	this.comment = comment,
	this.mortgage = mortgage
}
home = []
new homesForSale('The Villa',"http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg",'4747 Northside Dr, Atlanta, Ga 30327', 'For Sale', '$2,999,000', 'Zestimate: $4,031,664', 'A good deal!! (25% off!)', 'Estimated Mortgage: $11,179/mo'),
new homesForSale('The Pool House',"http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg",'1101 Garmon Dr NW, Atlanta, Ga 30327', 'For Sale', '$2,399,000', 'Zestimate: $2,684,662','Average Deal', 'Estimated Mortgage: $8943/mo'),
new homesForSale('The Awesome',"http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510",'914 Davis Dr, Atlanta, GA 30327','Not for Sale', 'Zestimate: 2,134,055', 'Estimated Mortgage: - '),
new homesForSale('Versailles',"http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg", '5115 Northside Dr, Atlanta, GA 30327','For Sale', '$8,000,000', 'Zestimate: $12,360,014', 'A crazy deal!!(30% off!)', 'Estimated Mortgage: $29,821/mo')


$(document).ready(function(){
	for(i=0; i<home.length;i++){
		html +='<h3'+homesForSale.title+'</h3>';
		html +='<p><img src='+image+'/></p>';
		html +='<h4>'
	}

})