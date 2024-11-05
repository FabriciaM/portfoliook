

function Concluir(){
    var nome = document.getElementById("nomeid");
     var email = document.getElementById("emailid");
     var datan = document.getElementById("datanid");
     var celular =document.getElementById("celularid");
     var telefone =document.getElementById("telefoneid");
     var genero =document.getElementById("generoid");
     var pagamento =document.getElementById("pagamentoid");
     var cpf =document.getElementById("cpfid");
     var rg =document.getElementById("rgid");
     var nacionalidade= document.getElementById("nacionalidadeid");
     var cep= document.getElementById("cepid");
     var endereço =document.getElementById("endereçoid");
     var n =document.getElementById("nid");
     var compl =document.getElementById("complid");
     var bairro =document.getElementById("bairroid");
     var cidade =document.getElementById("cidadeid");

window.alert(`Sr(a) ${nome.value} , os seus dados foram salvos com sucesso!
  \nNome: ${nome.value}\n E-mail: ${email.value}\n Data de Nascimento: ${datan.value}
  \nCelular Principal: ${celular.value}\n Telefone Residencial: ${telefone.value}\n CPF: ${cpf.value}
  \nRG:${rg.value}\n Nacionalidade: ${nacionalidade.value}\n CEP:${cep.value}\n Endereço: ${endereço.value}
  \nNº: ${n.value}\n Complemento: ${compl.value}\n Bairro: ${bairro.value}\n Cidade: ${cidade.value}`);
}
