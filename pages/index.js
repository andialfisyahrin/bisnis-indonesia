import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container container-sm'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='logo'>
        <Image src="/img/image-logo.png"  alt='' width={238} height={50} />
        </div>
        <p className='text-center mt-5'>Register your account and get a voucher 100k for a Subscription Plan</p>
        <form className="row g-3 mt-3">
          <div className="col-auto">
            <input type="password" className="form-control border-bottom" id="inputPassword2" placeholder="Your Email" />
          </div>
          <div className="col-auto">
            <input type="password" className="form-control border-bottom" id="inputPassword2" placeholder="Your Password" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3 px-3">Create Account</button>
          </div>
        </form>
      </div>
      
      <div className='d-flex justify-content-center mt-4'>
        <Image src="/img/Group 1489.png" alt='' width={1100} height={260} />
      </div>

      <div className='d-flex justify-content-center offer mt-5'>
        <p>Offers end up to</p>
      </div>

      <div className='time d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center'>
          <h1>12</h1>
          <h4>HOURS</h4>
        </div>
        <div className='d-flex flex-column justify-content-center ms-5'>
          <h1>25</h1>
          <h4>MINUTES</h4>
        </div>
        <div className='d-flex flex-column justify-content-center ms-5'>
          <h1>44</h1>
          <h4>SECONDS</h4>
        </div>
      </div>

      <div className='d-flex justify-content-center flex-column align-items-center mt-5 '>
        <p>Articles you can read</p>
        <div className='d-flex align-item-center justify-content-center baris-article mt-3'>
          <div className='d-flex align-items-center article'>
            <Image src="/img/image 7.png" alt='' width={77} height={64} />
            <div className='ms-2 article_exp'>
              <h3>Economics</h3>
              <p>Which economics have done best and worst during the pandemic</p>
            </div>
          </div>
          <div className='d-flex align-items-center article'>
            <Image src="/img/image 7.png" alt='' width={77} height={64} />
            <div className='ms-2 article_exp'>
              <div className='d-flex'>
                <h3>Economics</h3>
                <h4 className='bg-dark text-white ms-2'>PREMIUM</h4>
              </div>
              <p>Which economics have done best and worst during the pandemic</p>
            </div>
          </div>
          <div className='d-flex align-items-center article'>
            <Image src="/img/image 7.png" alt='' width={77} height={64} />
            <div className='ms-2 article_exp'>
              <div className='d-flex'>
                <h3>Economics</h3>
                <h4 className='bg-dark text-white ms-2'>PREMIUM</h4>
              </div>
              <p>Which economics have done best and worst during the pandemic</p>
            </div>
          </div>
        </div>

        <div>
          <div className='d-flex mt-4 baris-kartu'>
            <div className='kartu kartu-coklat d-flex py-3 px-4 align-items-center'>      
              <h2 className='text-white'>Bronze</h2>
              <div className='ms-5'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ms-2'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='kartu kartu-silver d-flex py-3 px-4 align-items-center justify-content-center ms-5'>      
              <div>
                <h2 className='text-white'>Silver</h2>
                <h4 className='text-white'>Durasi 3 bulan</h4>
              </div>
              
              <div className='ms-5'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ms-2'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex mt-4 baris-kartu'>
            <div className='kartu kartu-gold d-flex py-3 px-4 align-items-center'>      
              <h2 className='text-white'>Bronze</h2>
              <div className='ms-5'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ms-2'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-light'></div>
                    <div className='ms-2'>
                      <p className='text-white'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='kartu kartu-platinum d-flex py-3 px-4 align-items-center ms-5'>      
              <div>
                <h2 className='text-dark'>Platinum</h2>
                <h4 className='text-dark'>Durasi 3 bulan</h4>
              </div>
              <div className='ms-5 kartu-exp '>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-dark'></div>
                    <div className='ms-2'>
                      <p className='text-dark'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-dark'></div>
                    <div className='ms-2'>
                      <p className='text-dark'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ms-2'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div className='dot bg-dark'></div>
                    <div className='ms-2'>
                      <p className='text-dark'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mt-2'>
                    <div className='dot bg-dark'></div>
                    <div className='ms-2'>
                      <p className='text-dark'>Lorem ipsum dolor sit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex mt-5'>
          <p>For more info</p>
          <div className='ms-3 d-flex'>
            <div className='ms-3'>
            <Image src="/img/vector.png" alt='' width={24} height={24} />
            </div>
            <div className='ms-3'>
            <Image src="/img/vector (1).png" alt='' width={24} height={24} />
            </div>
            <div className='ms-3'>
            <Image src="/img/vector (2).png" alt='' width={24} height={24} />
            </div>
            <div className='ms-3'>
            <Image src="/img/vector (3).png" alt='' width={24} height={24} />
            </div>
            <div className='ms-3'>
            <Image src="/img/vector (4).png" alt='' width={24} height={24} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
)}