
    function copyText(id) {
      const text = document.getElementById(id);
      text.select();
      text.setSelectionRange(0, 99999); // For mobile
      navigator.clipboard.writeText(text.value);
      alert("Copied!");
    }
  