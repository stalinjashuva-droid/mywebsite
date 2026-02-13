function orderNow() {

  const phoneNumber = "919502101483";  

  const message = "Hi, I want to order this shirt from your website";

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}
