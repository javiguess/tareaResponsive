        document.querySelectorAll('.btn-accion').forEach(button => {
            button.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                card.classList.toggle('card-accionada');
                e.target.textContent = card.classList.contains('card-accionada') ? '¡Visitado!' : 'Más Info';
            });
        });

        // Lógica de JS para el like (cambiará el icono, no el orden todavía)
        document.querySelectorAll('.btn-like').forEach(button => {
            button.addEventListener('click', (e) => {
                const icon = e.currentTarget.querySelector('i');
                const isLiked = e.currentTarget.dataset.liked === 'true';
                
                if (isLiked) {
                    icon.classList.replace('fa-solid', 'fa-regular');
                    e.currentTarget.dataset.liked = 'false';
                    icon.style.color = '#fff';
                } else {
                    icon.classList.replace('fa-regular', 'fa-solid');
                    e.currentTarget.dataset.liked = 'true';
                    icon.style.color = 'red'; // Corazón relleno rojo
                }
            });
        });