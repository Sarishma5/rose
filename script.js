document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loveForm")
    const message = document.getElementById("message")
    const roseContainer = document.getElementById("roseContainer")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const belovedName = document.getElementById("belovedName").value
  
      message.textContent = `The rose of love blooms for ${name} and ${belovedName}!`
      message.style.display = "block"
      form.style.display = "none"
      roseContainer.classList.add("bloom")
    })
  })
  
  