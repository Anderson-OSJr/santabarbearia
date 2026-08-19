Como trocar os placeholders da galeria por fotos reais
=======================================================

1. Salve as fotos reais aqui como 01.jpg, 02.jpg, 03.jpg, 04.jpg, 05.jpg, 06.jpg
   (formato paisagem, proporção 4:3 funciona melhor com o layout atual).

2. Em src/components/sections/gallery.tsx, troque cada
   <PlaceholderTile icon={...} caption="..." /> por:

     <Image
       src="/images/gallery/01.jpg"
       alt="Descrição da foto"
       width={800}
       height={600}
       className="aspect-4/3 w-full rounded-lg border border-border object-cover"
     />

   (import Image from "next/image" no topo do arquivo)

3. Repita para os 6 itens do array TILES.
