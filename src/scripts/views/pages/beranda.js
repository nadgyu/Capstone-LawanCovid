import CovidApiSource from '../../data/covid-api-source';
import createGlobalCovidTemplate from '../templates/template-creator';

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
                  <span class="price-table-category">SPESIMEN DIPERIKSA</span>
                  <h3>1.23 <sub>Positif Rate</sub></h3>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          1.270.304
                  </th>
                  <th>
                    908.241
                  </th>
                </tr>
                <tr>
                  <td>Jumlah Spesimen Diperiksa</td>
                  <td>Jumlah Orang Diperiksa</td>
                </tr>
              </thead>
            </table>
          </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="price-table price-table-danger">
            <div class="price-table-header">
              <span class="price-table-category">Kasus Terkonfirmasi Covid-19</span>
              <h3 class="confirmed-covid">
              <sub>KASUS POSITIF</sub>
              </h3>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="text-danger"> 45 (0.04%) </th>
                    <th class="death-covid">
                      
                    </th>
                    <th class="text-success recovered-covid">
                  </th>
                </tr>
                <tr>
                  <td rowspan="1"  class="fw-bold text-danger">Kasus Aktif</td>
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
    const confirmedCovid = await CovidApiSource.ConfirmedCovidApi();
    const confirmedCovidContainer = document.querySelector('.confirmed-covid');
    confirmedCovidContainer.innerHTML += createGlobalCovidTemplate(confirmedCovid.toLocaleString());

    const deathCovid = await CovidApiSource.DeathCovidApi();
    const deathCovidContainer = document.querySelector('.death-covid');
    deathCovidContainer.innerHTML += createGlobalCovidTemplate(deathCovid.toLocaleString());

    const recoveredCovid = await CovidApiSource.RecoveredCovidApi();
    const recoveredCovidContainer = document.querySelector('.recovered-covid');
    recoveredCovidContainer.innerHTML += createGlobalCovidTemplate(recoveredCovid.toLocaleString());
  },
};

export default Beranda;
