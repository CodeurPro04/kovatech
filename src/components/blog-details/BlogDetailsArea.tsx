"use client"
import { Link } from "react-router-dom";

const BlogDetailsArea = () => {
  return (
    <>
      <section className="sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content">
                <div className="news-block-five">
                  <div className="news-content-five">
                    <ul className="post-info">
                      <li><img src="assets/images/icons/icon-22.png" alt="" /><Link to="/blog-details">Mededi.Ha</Link></li>
                      <li><img src="assets/images/icons/icon-23.png" alt="" /><span>Commentaires (03)</span></li>
                      <li><img src="assets/images/icons/icon-24.png" alt="" /><span>3 min de lecture</span></li>
                    </ul>
                    <h2>Purus Face Integer Praesen Sollicitudin Netus Odio Comodo.</h2>
                  </div>
                  <div className="image-box">
                    <figure className="image"><img src="assets/images/news/news-12.jpg" alt="" /></figure>
                  </div>
                </div>
                <div className="text-box">
                  <p>Il existe de nombreuses variantes de passages, mais la majorité ont été modifiées sous une forme ou une autre, par de l'humour injecté ou des mots aléatoires qui ne semblent même pas crédibles.</p>
                  <p>C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. L'intérêt d'utiliser Lorem Ipsum est qu'il a une distribution de lettres plus ou moins normale, contrairement à 'Contenu ici, contenu ici', ce qui le rend semblable à du français lisible.</p>
                  <p>De nombreux logiciels de publication assistée par ordinateur et éditeurs de pages web utilisent désormais Lorem Ipsum comme modèle de texte par défaut, et une recherche sur 'lorem ipsum' permet de découvrir de nombreux sites encore à l'état embryonnaire.</p>
                </div>
                <blockquote>
                  <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt="" /></div>
                  <h3>En egret Farer  odio. Nunc at ipsum vitae neque eleifend suscipit. À l'avant Ut nils Iacus viverra sed dapibus non tellus.</h3>
                </blockquote>
                <div className="text-box">
                  <h2>Laissez notre équipe de gestion d'investissement vous accompagner</h2>
                  <ul className="list-item">
                    <li><i className="icon-57"></i><span>Contrôle total de l'entreprise</span></li>
                    <li><i className="icon-57"></i><span>Tableau de bord utilisateur & analyses</span></li>
                    <li><i className="icon-57"></i><span>Rapports personnalisés</span></li>
                    <li><i className="icon-57"></i><span>Suivi régulier des mises à jour</span></li>
                    <li><i className="icon-57"></i><span>Support prioritaire 24/7</span></li>
                  </ul>
                </div>
                <div className="two-column-image">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image"><img src="assets/images/news/news-1.jpg" alt="" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image"><img src="assets/images/news/news-2.jpg" alt="" /></figure>
                    </div>
                  </div>
                </div>
                <div className="text-box">
                  <h2>Quels sont les avantages et les inconvénients ?</h2>
                  <p>Beaucoup découvriront de nombreux sites encore à l'état embryonnaire. Diverses versions ont évolué au fil des ans, parfois par accident, parfois intentionnellement (humour injecté, etc.).</p>
                  <p>Beaucoup découvriront de nombreux sites encore à l'état embryonnaire. Diverses versions ont évolué au fil des ans, parfois par accident, parfois intentionnellement (humour injecté, etc.). Il existe de nombreuses variantes de passages disponibles, mais la majorité ont été modifiées sous une forme ou une autre, par de l'humour injecté ou des mots aléatoires qui ne semblent même pas crédibles. Si vous utilisez un passage de Lorem Ipsum, vous devez vous assurer qu'il n'y a rien d'embarrassant caché au milieu du texte.</p>
                </div>
                <div className="post-share-option">
                  <div className="text-box"><h2>Tags :</h2></div>
                  <div className="inner-box">
                    <ul className="post-tags">
                      <li><Link to="/blog-details">Agence</Link></li>
                      <li><Link to="/blog-details">Brand Genius</Link></li>
                      <li><Link to="/blog-details">Créatif</Link></li>
                      <li><Link to="/blog-details">Créatif</Link></li>
                    </ul>
                    <ul className="social-links">
                      <li><Link to="/blog-details"><i className="icon-15"></i></Link></li>
                      <li><Link to="/blog-details"><i className="icon-17"></i></Link></li>
                      <li><Link to="/blog-details"><i className="icon-16"></i></Link></li>
                      <li><Link to="/blog-details"><i className="icon-18"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="comment-box">
                  <div className="text-box">
                    <h2>Commentaires</h2>
                  </div>
                  <div className="comment-inner">
                    <div className="comment">
                      <figure className="comment-thumb"><img src="assets/images/news/comment-1.png" alt="" /></figure>
                      <div className="comment-text">
                        <h3>Charlotte Sophia</h3>
                        <span className="designation">Chef de produit</span>
                        <p>Beaucoup découvriront de nombreux sites encore à l'état embryonnaire. Diverses versions ont évolué au fil des ans, parfois par accident, parfois intentionnellement (humour injecté, etc.).</p>
                        <Link to="/blog-details">Répondre</Link>
                      </div>
                    </div>
                    <div className="comment replay-comment">
                      <figure className="comment-thumb"><img src="assets/images/news/comment-2.png" alt="" /></figure>
                      <div className="comment-text">
                        <h3>Charlotte Sophia</h3>
                        <span className="designation">Chef de produit</span>
                        <p>Diverses versions ont évolué au fil des ans, parfois par accident, parfois intentionnellement (humour injecté, etc.).</p>
                        <Link to="/blog-details">Répondre</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form-area">
                  <div className="text-box">
                    <h2>Laisser un commentaire</h2>
                    <p>Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués *</p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Nom*</label>
                          <input type="text" name="name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Email*</label>
                          <input type="email" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Commentaire*</label>
                          <textarea name="message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Site web*</label>
                          <input type="text" name="website" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="message-btn">
                          <button type="submit" className="primary-btn one gradient-bg white-color">Envoyer</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                <div className="sidebar-widget search-widget">
                  <div className="widget-title">
                    <h3>Recherche</h3>
                  </div>
                  <div className="search-inner">
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="form-group">
                        <input type="search" name="search-field" placeholder="Recherche..." required />
                        <button type="submit"><img src="assets/images/icons/icon-25.png" alt="" /></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h3>Articles récents</h3>
                  </div>
                  <div className="post-box">
                    <article className="post">
                      <figure className="post-image"><Link to="/blog-details"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                      <div className="post-content">
                        <div className="post-date"><img src="assets/images/icons/icon-26.png" alt="" /><span>23 Janv. 2022</span></div>
                        <h5><Link to="/blog-details">Dui Venenatis Elit Morbile Morem Porttitor</Link></h5>
                      </div>
                    </article>
                    <article className="post">
                      <figure className="post-image"><Link to="/blog-details"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                      <div className="post-content">
                        <div className="post-date"><img src="assets/images/icons/icon-26.png" alt="" /><span>23 Janv. 2022</span></div>
                        <h5><Link to="/blog-details">Cras Lacus Class a Carius Eleifend Hendrer</Link></h5>
                      </div>
                    </article>
                    <article className="post">
                      <figure className="post-image"><Link to="/blog-details"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                      <div className="post-content">
                        <div className="post-date"><img src="assets/images/icons/icon-26.png" alt="" /><span>23 Janv. 2022</span></div>
                        <h5><Link to="/blog-details">Netus Fermentum Partur Putate Nise Tellus</Link></h5>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="sidebar-widget catagories-widget">
                  <div className="widget-title">
                    <h3>Catégories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="catagories-list clearfix">
                      <li><Link to="/blog-details"><span className="text">Mobile Set</span><span className="number">01</span></Link></li>
                      <li><Link to="/blog-details"><span className="text">Design Fusion</span><span className="number">02</span></Link></li>
                      <li><Link to="/blog-details"><span className="text">Brand Elevate</span><span className="number">03</span></Link></li>
                      <li><Link to="/blog-details"><span className="text">Studio Inscribe</span><span className="number">04</span></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title">
                    <h3>Tags populaires</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li><Link to="/blog-details">Brand Genius</Link></li>
                      <li><Link to="/blog-details">Créatif</Link></li>
                      <li><Link to="/blog-details">Agence</Link></li>
                      <li><Link to="/blog-details">Branding</Link></li>
                      <li><Link to="/blog-details">Marketing</Link></li>
                      <li><Link to="/blog-details">Créatif</Link></li>
                      <li><Link to="/blog-details">Creative Bloom</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;