// Task 1

// var webAdress = $('.webAdress').text();
var webAdress = $('.webAdress');

$('#collect').click(function(){
	var site = $('input:text').val();

	if (site.indexOf('https://www.') == 0) {
		$(webAdress).text(site.replace('https://www.','').slice(0,-3));
	}
	else if (site.indexOf('http://www.') == 0) {
		$(webAdress).text(site.replace('http://www.','').slice(0,-3));
	}
	else if (site.indexOf('https://') == 0) {
		$(webAdress).text(site.replace('https://','').slice(0,-3));
	}
	else if (site.indexOf('http://') == 0) {
		$(webAdress).text(site.replace('http://','').slice(0,-3));
	}
	else {
		$(webAdress).text(site.slice(0,-3));
	}

	
	// var texter2 = $(webAdress).text().replace(/l/g, '1').replace(/i/g, '3').replace(/s/g, '5').replace(/o/g, '0').replace(/O/g, '0');
	// $(webAdress).text(texter2);

	$(webAdress).text(webAdress.text().replace(/l/g, '1').replace(/i/g, '3').replace(/s/g, '5').replace(/o/g, '0').replace(/O/g, '0'));


	var result = '';
	function randomer() {
        
        var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var maxPosition = words.length;
        for( i = 0; i < 4; ++i ) {
            position = Math.floor ( Math.random() * maxPosition );
            result = result + words.substring(position, position + 1);
        }
        return result;     
    }
    randomer();
	console.log(result);

	$(webAdress).text(webAdress.text()+result);

});