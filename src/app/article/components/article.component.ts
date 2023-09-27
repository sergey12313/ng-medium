import {Component} from '@angular/core';
import {ArticleInterface} from 'src/app/shared/types/article.interface';

const post: ArticleInterface = {
  slug: 'Try-to-bypass-the-SAS-card-maybe-it-will-transmit-the-solid-state-system!-120863',
  title:
    'Try to bypass the SAS card, maybe it will transmit the solid state system!',
  description:
    'Est iste totam accusamus dolorem est. Quis non sit impedit similique incidunt odio aspernatur aut rem. Architecto est eum.',
  body: 'Ipsa cumque ad repellat qui libero quia impedit fugiat.\\nExcepturi ut vitae recusandae eos quisquam et voluptatem.\\nNeque nostrum distinctio provident eius tempore odio aliquid.\\nSaepe ut suscipit architecto. Sapiente vitae culpa ut voluptatem incidunt excepturi voluptates exercitationem.\\nSed doloribus alias consectetur omnis occaecati ad placeat labore.\\nVoluptate consequatur expedita nemo recusandae sint assumenda.\\nQui vel totam quia fugit saepe suscipit autem quasi qui.\\nEt eum vel ut delectus ut nesciunt animi. Mollitia nostrum exercitationem sunt rem.\\nRem et voluptas consequatur mollitia nostrum.\\nSunt nesciunt et pariatur quam provident impedit. Officia consectetur quibusdam velit debitis porro quia cumque.\\nSuscipit esse voluptatem cum sit totam consequatur molestiae est.\\nMollitia pariatur distinctio fugit. Qui et dolorum.\\nEveniet architecto qui accusamus et modi harum facilis a eum.\\nEt vel cumque voluptatem earum minima perferendis. Illum voluptates ut vel et.\\nUt debitis excepturi suscipit perferendis officia numquam possimus.\\nFacere sit doloremque repudiandae corrupti veniam qui. Ipsa laudantium deserunt. Totam ab necessitatibus quidem non. Mollitia nostrum exercitationem sunt rem.\\nRem et voluptas consequatur mollitia nostrum.\\nSunt nesciunt et pariatur quam provident impedit. Molestias non debitis quibusdam quis quod.\\nSaepe ab et hic unde et sed.\\nMagni voluptatem est.\\nEt similique quo porro et.',
  tagList: ['dolores', 'aut', 'consectetur', 'ullam'],
  createdAt: '2022-12-09T13:46:24.263Z',
  updatedAt: '2022-12-09T13:46:24.263Z',
  favorited: true,
  favoritesCount: 336,
  author: {
    username: 'Anah Benešová',
    bio: null,
    image: 'https://api.realworld.io/images/demo-avatar.png',
    following: false,
  },
};

@Component({
  selector: 'mc-login',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  article = post;
}
