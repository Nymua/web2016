$(function(){
	
	if ($('#Connexion').on("click",function(){
		$('#error').val('').text('');
		
		$login = $(':input[name=UserPseudo]').val(); 
		$mdp = $(':input[name=UserPassword]').val();
		var errors = [];
		
		if ($login === ""){
			errors.push("vous devez mettre un login !");
			//alert("vous devez mettre un login !");
		}
		if ($mdp === ""){
			errors.push("vous devez mettre un mot de passe !");
			//alert("vous devez mettre un mot de passe !");
		}
		if ($login !== "" && $login === "admin" && $mdp === "admin"){
			document.location.href = "HomePage.html";
		} else {
			errors.push("votre login et/ou mot de passe est incorrect !");
			//alert("votre login et/ou mot de passe est incorrect !");
		}
		
		var div = $('#error');
		var ul = $('<ul>');
				
		for(var i = 0; i < errors.length;i++){
			var errtext = errors[i];
			var li = $('<li>');
			$(li).text(errtext);
			$(ul).append(li);
		}
		$('#error').append(ul).show();
	}));
	$("#CreateAccount").on("click",function(){
		document.location.href="CreateAccount.html";
	})
});