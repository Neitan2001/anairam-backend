// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      { label: 'Seed Evento 1', date: new Date('2021-02-12'), description: 'Desc 1', imageUrl: 'https://vykcaezbaaokfpzflldq.supabase.co/storage/v1/object/public/anairam-assets//Show-Louis-Tomlison.webp' },
      { label: 'Seed Evento 2', date: new Date('2021-03-15'), description: 'Desc 2', imageUrl: 'https://vykcaezbaaokfpzflldq.supabase.co/storage/v1/object/public/anairam-assets//Show-Louis-Tomlison.webp' },
      { label: 'Seed Evento 3', date: new Date('2021-03-18'), description: 'Desc 3', imageUrl: 'https://vykcaezbaaokfpzflldq.supabase.co/storage/v1/object/public/anairam-assets//Show-Louis-Tomlison.webp' },
    ],
    skipDuplicates: true
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
