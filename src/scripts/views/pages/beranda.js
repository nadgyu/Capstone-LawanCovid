/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import CovidApiSource from '../../data/covid-api-source';
import createCovidDataTemplate from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
      <article class="article-beranda" id="beranda">
          <div class="beranda">
              <div class="header-beranda">
                  <h1>Solusi Informasi</h1>
                  <h1><span style= "color:#F37225">COVID-19</span></h1>
                  <p>dari pencegahan hingga penyembuhan</p>
              </div>
              <div class="content-left">
                  <img class="suster" src="/images/suster.png" alt="suster">
              </div>
           </div>
      </article>
        <!-- data monitoring covid -->
      <section class="container-fluid text-center d-flex justify-content-center bg-orange">
        <article class="data-monitoring">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="price-table price-table-info">
                <div class="price-table-header">
                  <span class="price-table-category"></span>
                  <h3>
                Data Global
                  </h3>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="text-danger global-confirmed-covid"></th>
                    <th class="global-death-covid">
                    </th>
                    <th class="text-success global-recovered-covid">
                  </th>
                </tr>
                <tr>
                  <td rowspan="1"  class="fw-bold text-danger">Terkonfirmasi</td>
                  <td rowspan="1" class="fw-bold">Meninggal</td>
                  <td rowspan="1" class="fw-bold">Sembuh</td>
                </tr>
              </thead>
            </table>
          </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="price-table price-table-danger">
            <div class="price-table-header">
              <span class="price-table-category"></span>
              <h3>
                Data Indonesia
                  </h3>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="text-danger indo-confirmed-covid"></th>
                    <th class="indo-death-covid">
                    </th>
                    <th class="text-success indo-recovered-covid">
                  </th>
                </tr>
                <tr>
                  <td rowspan="1"  class="fw-bold text-danger">Terkonfirmasi</td>
                  <td rowspan="1" class="fw-bold">Meninggal</td>
                  <td rowspan="1" class="fw-bold">Sembuh</td>
                </tr>
              </thead>
            </table>
          </div>
          </div>
        </div>
      </div>
    </article>
  </section>
      
  <div class="box"><br>
    <img class="gambar" src="/images/corona-icon.png">
    <h2>Apa itu COVID-19</h2>
    <p class="desc" align="justify"> Pneumonia Coronavirus Disease 2019 atau COVID-19 adalah penyakit peradangan paru yang disebabkan oleh Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2).
      Gejala klinis yang muncul beragam, mulai dari seperti gejala flu biasa (batuk, pilek, nyeri tenggorokan, nyeri otot, nyeri kepala) sampai yang berkomplikasi berat (pneumonia atau sepsis).
    </p>
    <h2>Bagaimana COVID-19 Menular?</h2>
    <p class="desc" align="justify">Cara penularan SARS-CoV-2 penyebab COVID-19 ialah melalui komtak dengan droplet saluran napas penderita. Droplet merupakan partikel kecil dari mulut penderita yang mengandung kuman penyakit,
      yang dihasilkan pada saat batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu (biasanya 1 meter). Droplet bisa menempel di pakaian atau benda di sekitar penderita
      pada saat batuk atau bersin. Namun, partikel droplet cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu yang lama. Oleh karena itu, orang yang sedang sakit,
      diwajibkan untuk menggunakan masker untuk mencegah penyebaran droplet. Untuk penularan melalui makanan, sampai saat ini belum ada bukti ilmiahnya.
    </p>
  </div> <br><br>
  <div>
    <img class="dekstop" src="/images/icon-dekstop.png"> <br> <br>
    <img class="dekstop" src="/images/preventif-icon.png">
  </div>
  
  <section class="container">
    <div class="card">
      <div class="card-image img-1"></div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sem. Quisque congue dui et lectus ornare vehicula. Sed viverra sapien
          vitae diam viverra, ut condimentum velit lacinia
        </p>
        <a href="">Baca Selengkapnya</a>
      </div>
      <div class="card">
        <div class="card-image img-2"></div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sem. Quisque congue dui et lectus ornare vehicula. Sed viverra sapien
          vitae diam viverra, ut condimentum velit lacinia
        </p>
        <a href="">Baca Selengkapnya</a>
      </div>
      <div class="card">
        <div class="card-image img-3"></div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sem. Quisque congue dui et lectus ornare vehicula. Sed viverra sapien
          vitae diam viverra, ut condimentum velit lacinia
        </p>
        <a href="">Baca Selengkapnya</a>
      </div>
      <div class="card">
        <div class="card-image img-4"></div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sem. Quisque congue dui et lectus ornare vehicula. Sed viverra sapien
          vitae diam viverra, ut condimentum velit lacinia
        </p>
        <a href="">Baca Selengkapnya</a>
      </div>
    </section>
    
    <!--Button !-->
    <button class="button-next" role="button">Selanjutnya>></button>
    `;
  },

  async afterRender() {
    const globalConfirmedCovid = await CovidApiSource.globalConfirmedCovidApi();
    const globalConfirmedCovidContainer = document.querySelector('.global-confirmed-covid');
    globalConfirmedCovidContainer.innerHTML += createCovidDataTemplate(globalConfirmedCovid.toLocaleString());

    const globalDeathCovid = await CovidApiSource.globalDeathCovidApi();
    const globalDeathCovidContainer = document.querySelector('.global-death-covid');
    globalDeathCovidContainer.innerHTML += createCovidDataTemplate(globalDeathCovid.toLocaleString());

    const globalRecoveredCovid = await CovidApiSource.globalRecoveredCovidApi();
    const globalRecoveredCovidContainer = document.querySelector('.global-recovered-covid');
    globalRecoveredCovidContainer.innerHTML += createCovidDataTemplate(globalRecoveredCovid.toLocaleString());

    const indoConfirmedCovid = await CovidApiSource.indoConfirmedCovidApi();
    const indoConfirmedCovidContainer = document.querySelector('.indo-confirmed-covid');
    indoConfirmedCovidContainer.innerHTML += createCovidDataTemplate(indoConfirmedCovid.toLocaleString());

    const indoDeathCovid = await CovidApiSource.indoDeathCovidApi();
    const indoDeathCovidContainer = document.querySelector('.indo-death-covid');
    indoDeathCovidContainer.innerHTML += createCovidDataTemplate(indoDeathCovid.toLocaleString());

    const indoRecoveredCovid = await CovidApiSource.indoRecoveredCovidApi();
    const indoRecoveredCovidContainer = document.querySelector('.indo-recovered-covid');
    indoRecoveredCovidContainer.innerHTML += createCovidDataTemplate(indoRecoveredCovid.toLocaleString());
  },
};

export default Beranda;
