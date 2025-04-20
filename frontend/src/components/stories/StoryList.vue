<template>
    <div class="masonry-container">
        <StoryCard v-for="(story, index) in stories" :key="index" :story="story" />
    </div>
</template>

<script setup>
import StoryCard from './StoryCard.vue';

const stories = [
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'High On Films',
        title: 'The 10 Most Unsettling Movies You’ll Ever See',
        excerpt:
            'Filmmaking is a form of self-expression: “The most personal is the most creative.” Remember that? Well, that’s quite true most of the time. This generation of filmmakers, such as Gasper Noe, Lars von Trier, and Michael Haneke, do not hesitate to leave their imprint and personal style on their films, irrespective of how that makes the audience feel. They’ve developed a warning system to offset any unwilling takers and keep their films limited to ‘their’ audience. Beyond these names, there…',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Les recos de Jean-Pierre Améris sur UniversCiné',
        excerpt:
            'À l’occasion de la sortie en salles de son nouveau long métrage Aimons-nous vivants, UniversCiné a rencontré Jean-Pierre Améris (Marie-Line et son juge, Les Emotifs anonymes, Profession du père…) nous a fait l’honneur d’une carte blanche. Le réalisateur a donc choisi cinq films, cinq coups de cœur dans notre catalogue…',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'The Price of Vision: Why Ryan Coogler’s “Sinners” Matters',
        excerpt:
            'When a filmmaker like Ryan Coogler is handed a blank cheque by a major studio, its more than just a financial gesture, its a cultural moment.',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'The Amateur Explained | A Beautiful Digital Death',
        excerpt:
            'The Amateur is strange, because it presents itself as a revenge thriller and a man dealing with grief after the death of his wife. But there’s a lot more subtextual nuance to what’s going on. Like, did you realize the subtle ways The Amateur was telling you to be online less and be more active in the world? I feel like this movie was engineered by a psychologist attempting to see if they can incept viewers into touching grass and voting. ',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Ryan Coogler’s ‘Sinners’ is a Different Kind of Mess',
        excerpt:
            'A $100-million vampire opera that’s as messy as it is mesmerizing—part myth, part camp, part cultural reckoning. Sinners doesn’t just play with genre, it eats through it.',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'PRINCESS MONONOKE returns for Earth Day',
        excerpt: 'Catch the Ghibli classic with us starting on 4/20. Tickets here',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Nine explosive V-cinema crime thrillers arrive this April',
        excerpt: 'Girls, gangs and grit!',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Toxic Avenger l Official Teaser #2 l The World’s Greatest Headache Medicine',
        excerpt:
            'Are headaches keeping you down? Is stress making you look ugly and old? You dont have to be pathetic! If you have a headache, reach for the brand that works the best, BTH, Bi-Toxiphetamine Hydroxylate. In 2025, the only real cure for migraines and headaches is The Toxic Avenger, ONLY in theaters on August 29th.',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: '4th World Media Lab Marks 10 Years at the 51st Annual Seattle International Film Festival',
        excerpt:
            '2025 marks the 10th anniversary of 4th World Media Lab as part of the Seattle International Film Festival!',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Jerry Schatzberg Looks You in the Eyes',
        excerpt:
            'At 97, the photographer-turned-filmmaker—director of The Panic in Needle Park, Scarecrow, and more—remains a realist and a romantic.',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Spotlight on SINNERS Cinematographer Autumn Durald Arkapaw',
        excerpt:
            'With the highly anticipated release of SINNERS this month, acclaimed cinematographer and AFI Alum Autumn Durald Arkapaw (AFI Class of 2009), ASC, took us behind the scenes of her new project with director Ryan Coogler and star Michael B. Jordan. Known for her luminous visuals and signature use of anamorphic lenses, Autumn has built a genre-spanning career, moving seamlessly between indie films like PALO ALTO and TEEN SPIRIT, the documentary BEASTIE BOYS STORY and major studio projects like LOKI –…',
    },
    {
        image: 'https://a.ltrbxd.com/resized/story/image/2/5/7/1/8/6/8/shard/36492/image-rmmcnznh-960-960-0-0-fill.jpg?v=ffccdfe120',
        source: 'UniversCiné',
        title: 'Steamed Buns & Bento Boxes: Our Top Studio Ghibli Fest 2025 Foods',
        excerpt:
            'Ham, Ham, HAAAAAAM! For 40 years, Studio Ghibli has captivated the imaginations of viewers through immersive realism, offering compelling and effective stories that helped breathe life into animation. To quote Miyazaki:  ',
    },
];
</script>

<style scoped lang="scss">
.masonry-container {
    column-count: 3;
    column-gap: 24px;
    margin-top: 20px;
}
</style>
