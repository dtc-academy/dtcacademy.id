import React, { useRef, useEffect, useState } from "react"
import {
  Globalnav,
  Container,
  Banner,
  GlobalButton,
  BackgroundImage,
  CalcDiscount,
  Flex,
  Breadcrums,
  Step,
  TableSection,
  DateContent,
  BannerContent,
  GlobalSectionContentItem,
  GlobalHeader,
  GlobalContentParagraf,
  Globalfooter,
  GlobalSection,
  GlobalSectionContent,
  SectionContent,
} from "../../components/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col, Table, Button } from "antd"
import StickyBox from "react-sticky-box"
import Img from "gatsby-image"
import illusGrid from "../../images/Repeat Grid 2.svg"
import logoDtc from "../../images/logo-dtc.svg"
import { InView } from "react-intersection-observer"
import { css } from "@emotion/core"
import SEO from "../../components/gatsby-seo"

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        bannerBg: file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        footerLogo: file(relativePath: { eq: "lg-dtc.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const haederRef = useRef(null)
  const [idSection, setIdSection] = useState("#tentang-program")
  const breadcrumbsRef = useRef(null)

  const handleScroll = () => {
    if (!haederRef.current) return
    if (window.pageYOffset > 1000) {
      setTimeout(() => {
        haederRef.current.style.top = 0
      }, 100)
    } else {
      setTimeout(() => {
        haederRef.current.style.top = "-80px"
      }, 100)
    }
  }

  useEffect(() => {
    ;[...breadcrumbsRef.current.children].map(item => {
      item.classList.remove("active")
      if (idSection === item.firstChild.hash) {
        item.classList.add("active")
      }
    })
  }, [idSection])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  })

  const handleClickBreadcrumb = e => {
    console.dir(e.target)
  }

  const columnsTable = [
    {
      title: "Biaya Pendidikan",
      dataIndex: "name",
      key: "name",
      render: text => (
        <div>
          {text.title ? <div>{text.title}</div> : <span>{text}</span>}
          {text.desc ? <div style={{ fontSize: 14 }}>{text.desc}</div> : null}
        </div>
      ),
    },
    {
      title: "",
      key: "price",
      dataIndex: "price",
      render: value => {
        return <CalcDiscount value={value} />
      },
    },
  ]

  const columnsTable2 = [
    {
      title: "Promo Pendaftaran",
      dataIndex: "name",
      key: "name",
      render: text => (
        <div>
          {text.title ? <span>{text.title}</span> : <span>{text}</span>}
          {text.desc ? <span>{text.desc}</span> : null}
        </div>
      ),
    },
    {
      title: "",
      key: "price",
      dataIndex: "price",
      render: value => {
        return <CalcDiscount value={value} />
      },
    },
  ]

  const dataTable = [
    {
      key: "1",
      name: {
        title: "Biaya Kelas",
        desc: "Pembayaran dilakukan upfront 100%",
      },
      price: { price: 1000000, discount: 50 },
    },
    {
      key: "1",
      name: "Biaya Registrasi",
      price: { price: 5000 },
    },
  ]

  const dataTable2 = [
    {
      key: "1",
      name: "Biaya Kelas (Promo awal)",
      desc: "Pembayaran dilakukan upgront 100%",
      price: { price: 1000000, discount: 50 },
    },
    {
      key: "1",
      name: "Biaya Registrasi",
      price: { price: 5000 },
    },
  ]

  const handleChange = (inView, entry) => {
    // setIdSection(e.target.id)
    if (inView) {
      setIdSection(entry.target.firstChild.id)
    }
  }

  return (
    <>
      <SEO title="Intro Programming Class - DTC Academy" />
      <Globalnav ref={haederRef}>
        <Container>
          <Flex justifyContent="space-between" alignItems="center" height={80}>
            <Globalnav.Logo>
              <Flex alignItems="center">
                <div>
                  <img style={{ height: 40 }} src={logoDtc} alt="dtc" />
                </div>
                <span
                  css={css`
                    @media (max-width: 576px) {
                      display: none !important;
                    }
                  `}
                >
                  Be a UI Designer and Create a great product.
                </span>
              </Flex>
            </Globalnav.Logo>
            <div>
              <Button size="large" type="primary">
                Daftar Sekarang
              </Button>
            </div>
          </Flex>
        </Container>
      </Globalnav>
      <Banner>
        <BackgroundImage
          height={"100vh"}
          objectFit
          fluid={data.bannerBg.childImageSharp.fluid}
        />
        <BannerContent>
          <Container>
            <div
              css={css`
                @media (min-width: 576px) {
                  width: 70%;
                }
              `}
            >
              <h1>Be a UI Designer and Create a great prodccut.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                corporis!
              </p>
              <GlobalButton type="primary">Lihat Jadwal</GlobalButton>
            </div>
          </Container>
        </BannerContent>
      </Banner>
      <SectionContent style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0 }}>
          <StickyBox
            style={{
              marginTop: 120,
              marginBottom: 120,
              zIndex: 99,
              width: 190,
            }}
            offsetTop={180}
            offsetBottom={180}
          >
            <div>
              <Breadcrums ref={breadcrumbsRef}>
                <Breadcrums.Item className="active">
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#tentang-program"
                  >
                    Tentang Program
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#peluang-karir"
                  >
                    Peluang Karir
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#silabus-kelas"
                  >
                    Silabus Kelas
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#biaya-kelas"
                  >
                    Biaya Kelas
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link
                    onClick={handleClickBreadcrumb}
                    href="#jadwal"
                  >
                    Jadwal
                  </Breadcrums.Link>
                </Breadcrums.Item>
                <Breadcrums.Item>
                  <Breadcrums.Link onClick={handleClickBreadcrumb} href="#faq">
                    FAQ Program
                  </Breadcrums.Link>
                </Breadcrums.Item>
              </Breadcrums>
            </div>
          </StickyBox>
        </div>
        {/* <SectionContent.Section> */}
        {/* <Container> */}
        <Row type="flex">
          {/* <Col
                style={{ minHeight: "100%" }}
                sm={6}
                css={css`
                  @media (max-width: 768px) {
                    display: none;
                  }
                `}
              >
                
              </Col> */}
          <Col sm={24} md={24} lg={24}>
            <div>
              <InView key={1} onChange={handleChange}>
                <SectionContent.Section id="#tentang-program">
                  <Container>
                    <GlobalHeader
                      metaTitle="Tentang Program"
                      title="Kelas User Interface (UI) Design akan mengajarkan Kamu tentang prinsip-prinsip mendesain sebuah tampilan aplikasi digital."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={12}>
                          <div>
                            <h4>Tentang Program</h4>
                            <p>
                              Program ini terbuka bagi Anda yang tidak memiliki
                              latar belakang IT sebelumnya karena Anda akan
                              belajar coding dari awal melalui modul programming
                              fundamental, membangun aplikasi Web secara lengkap
                              dari Front End hingga Back End Development.
                            </p>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div>
                            <h4>Program Output</h4>
                            <p>
                              Menguasai coding dan dapat membangun aplikasi web
                              secara lengkap yaitu front end & back end
                              development.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>
              <InView key={2} onChange={handleChange}>
                <SectionContent.Section
                  id="#peluang-karir"
                  style={{
                    background: "#f5f5f5",
                  }}
                >
                  <Container>
                    <GlobalHeader
                      metaTitle="Peluang Karir"
                      title="Saatnya menjadi UI Desainer yang handal dan berkarir di industri digital."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <div>
                            <p>
                              Kebutuhan akan apli kasi yang menarik dan sesuai
                              dengan kebutuhan user menjadi sangat penting untuk
                              perusahaan sehingga peluang kerja seorang UI
                              Designer sangat di butuhkan. Anda dapat bekerja di
                              perusahaan start up, perusahaan besar, ataupun
                              memulai membuat produk digitalmu sendiri.
                              Kesempatan ini ada di depan anda jangan sampai
                              anda melewatkan kesempatan baik ini.
                            </p>
                            <p>
                              DTC Academy bekerja sama dengan banyak perusahaan
                              baik start up ataupun perusahaan besar untuk
                              dukungan karir mu kedepan. Anda dapat memulai
                              karir sebagai UI Designer di perusahaan rekan
                              kami.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>

              <InView key={3} onChange={handleChange}>
                <Container id="#silabus-kelas">
                  <SectionContent.Section
                    style={{ borderBottom: "1px solid #d8d8d8" }}
                  >
                    <GlobalHeader
                      metaTitle="Silabus Kelas"
                      title="Bahan ajar yang disajikan telah disusun sesuai kebutuhan industri digital saat ini."
                    />
                    <GlobalSectionContent>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>01</span>
                                <div>
                                  <h5>Introudction</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              <h4>Pengenalan Tentang User Interface</h4>
                              <p>
                                Kebutuhan akan apli kasi yang menarik dan sesuai
                                dengan kebutuhan user menjadi sangat penting
                                untuk perusahaan sehingga peluang kerja seorang
                                UI Designer sangat di butuhkan. Anda dapat
                                bekerja di perusahaan start up, perusahaan
                                besar, ataupun memulai membuat produk digitalmu
                                sendiri. Kesempatan ini ada di depan anda jangan
                                sampai anda melewatkan kesempatan baik ini.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                      <GlobalSectionContentItem>
                        <Row type="flex" gutter={60}>
                          <Col sm={8}>
                            <Step>
                              <Flex>
                                <span>01</span>
                                <div>
                                  <h5>UI Fundamentals</h5>
                                </div>
                              </Flex>
                            </Step>
                          </Col>
                          <Col sm={16}>
                            <div style={{ padding: "20px 0" }}>
                              <h4>
                                Mengenal prinsip-prinsip dalam mendesain UI
                              </h4>
                              <p>
                                Pada modul ini, Kamu diharapkan mengerti dan
                                mampu menerapkan prinsip UI dalam sebuah desain
                                produk.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </GlobalSectionContentItem>
                    </GlobalSectionContent>
                  </SectionContent.Section>
                </Container>
              </InView>
              <InView key={4} onChange={handleChange}>
                <Container id="#biaya-kelas">
                  <SectionContent.Section
                    style={{ borderBottom: "1px solid #d8d8d8" }}
                  >
                    <GlobalHeader
                      metaTitle="Biaya Kelas"
                      title="Rincian Biaya Pendidikan"
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60} justify="end">
                        <Col sm={23} xs={24}>
                          <div>
                            <TableSection>
                              <Table
                                columns={columnsTable}
                                dataSource={dataTable}
                                pagination={{ position: "none" }}
                                footer={() => {
                                  let total = 0
                                  dataTable.map(item => {
                                    total += item.price.price
                                  })
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <span>Total Biaya</span>
                                      <span>{total}</span>
                                    </div>
                                  )
                                }}
                              />
                            </TableSection>
                            <TableSection>
                              <Table
                                columns={columnsTable}
                                dataSource={dataTable}
                                pagination={{ position: "none" }}
                                footer={() => {
                                  let total = 0
                                  dataTable.map(item => {
                                    total += item.price.price
                                  })
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div style={{ width: "50%" }}>
                                        <div
                                          style={{
                                            fontSize: 16,
                                            color: "#333",
                                          }}
                                        >
                                          Total Biaya
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 14,
                                            marginTop: 10,
                                            color: "#bfbfbf",
                                          }}
                                        >
                                          Promo ini hanya terbatas untuk 15
                                          pendaftar pertama sampai dengan
                                          tanggal yang ditentukan.
                                        </div>
                                      </div>
                                      <span>{total}</span>
                                    </div>
                                  )
                                }}
                              />
                            </TableSection>
                          </div>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </SectionContent.Section>
                </Container>
              </InView>

              <InView key={5} onChange={handleChange}>
                <SectionContent.Section id="#jadwal">
                  <Container>
                    <GlobalHeader
                      metaTitle="Jadwal"
                      title="Jadwal Kelas Intensive UI Master Class."
                      desc="Silahkan pilih jadwal, sesuai schedule yang telah di tentukan."
                    />

                    <GlobalSectionContent>
                      <Row type="flex">
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                        <Col sm={8} xs={24}>
                          <div>
                            <DateContent.Head>
                              <h4>Tanggal Pelaksanaan</h4>
                            </DateContent.Head>
                            <DateContent.Content>
                              <div>30 September 2019 s/d</div>
                              <div>21 Oktober 2019</div>
                            </DateContent.Content>
                          </div>
                        </Col>
                      </Row>
                      <div style={{ marginTop: 60 }}>
                        <p style={{ color: "#bfbfbf" }}>
                          Ket: Promo early bird berlaku sampai tanggal 27 Sep
                          2019
                        </p>
                        <Flex style={{ marginTop: 40 }}>
                          <span style={{ marginRight: 20 }}>
                            Untuk info selengkapnya silahkan
                          </span>
                          <Button size="large" type="primary">
                            Hubungi Kami
                          </Button>
                        </Flex>
                      </div>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>

              <InView key={6} onChange={handleChange}>
                <SectionContent.Section
                  id="#faq"
                  style={{
                    background: "#f5f5f5",
                  }}
                >
                  <Container>
                    <GlobalHeader
                      metaTitle="FAQ Program"
                      title="Frequently Ask Question"
                      desc="Pertanyaan yang sering diajukan kepada kami, akan kami jawab disini."
                    />
                    <GlobalSectionContent>
                      <Row type="flex" gutter={60}>
                        <Col sm={24}>
                          <GlobalContentParagraf>
                            <h4>
                              Mengapa program UX Design sangat penting dan
                              relevan untuk saya saat ini?
                            </h4>
                            <p>
                              Apabila Anda memiliki produk digital seperti
                              aplikasi web atau mobile, bekerja di Startup
                              Digital, seorang Graphic Designer , atau siapa
                              saja yang ingin mendalami UI Design dan berkarir
                              sebagai UI Designer, course UI Design ini akan
                              sangat bermanfaat untuk Anda. User Interface
                              Design atau lebih dikenal dengan istilah UI Design
                              bukan hanya sekedar menciptakan estetika design
                              yang Indah untuk aplikasi web atau mobile Anda.
                            </p>
                            <p>
                              UI Design adalah tentang bagaimana pengguna
                              aplikasi memiliki keterikatan secara emosional dan
                              memiliki pengalaman yang mudah, menyenangkan dan
                              tepat sasaran dalam menggunakan sebuah aplikasi
                              web atau mobile. UI Design yang baik akan sangat
                              mempengaruhi customer loyalty dalam menggunakan
                              aplikasi web atau mobile Anda
                            </p>
                            <p>
                              Program training UI Design kami akan mempelajari
                              prinsip-prinsip yang perlu Anda kuasai dalam
                              menciptakan UI Design yang terbaik untuk aplikasi
                              web atau mobile Anda.
                            </p>
                            <h4>
                              Apakah saya harus memiliki background design untuk
                              mengikuti course ini?
                            </h4>
                            <p>
                              Apabila Anda memiliki background design sebelumnya
                              akan jauh lebih baik. Tapi course ini terbuka
                              untuk siapa saja yang tidak memiliki background
                              design sama sekali karena course ini akan lebih
                              banyak mendalami tentang karakteristik user untuk
                              menciptakan produk digital maupun desain yang
                              dapat diterima oleh masyarakat luas.
                            </p>
                          </GlobalContentParagraf>
                        </Col>
                      </Row>
                    </GlobalSectionContent>
                  </Container>
                </SectionContent.Section>
              </InView>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
        {/* </SectionContent.Section> */}
      </SectionContent>
      <GlobalSection
        css={css`
          position: relative;
        `}
      >
        <Container>
          <Flex justifyContent="center">
            <div
              style={{ textAlign: "center" }}
              css={css`
                position: relative;
                z-index: 10;
                @media (min-wdith: 576px) {
                  width: 50%;
                }
              `}
            >
              <h4>Anda tertarik dengan program intensive kelas kami?</h4>
              <Button size="large" type="primary">
                Daftar Sekarang
              </Button>
            </div>
          </Flex>
          <img
            style={{ position: "absolute", top: 0 }}
            src={illusGrid}
            alt=""
          />
          <img
            style={{ position: "absolute", right: "20%", bottom: 0 }}
            src={illusGrid}
            alt=""
          />
        </Container>
      </GlobalSection>
      <Globalfooter>
        <Container>
          <Row type="flex">
            <Col sm={12} md={6}>
              <div>
                <Globalfooter.List>
                  <li>
                    <Link to="/">
                      <Img fixed={data.footerLogo.childImageSharp.fixed} />
                    </Link>
                  </li>
                  <li>
                    <span style={{ marginTop: 40, display: "block" }}>
                      © DTC Academy 2019
                    </span>
                  </li>
                </Globalfooter.List>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <Globalfooter.List>
                  <li>
                    <span>Kelas</span>
                  </li>
                  <li>
                    <span>UI / UX</span>
                  </li>
                  <li>
                    <span>Frontend Developer</span>
                  </li>
                  <li>
                    <span>Backen Developer</span>
                  </li>
                </Globalfooter.List>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <Globalfooter.List>
                  <li>
                    <span>Social Media</span>
                  </li>
                  <li>
                    <span>Jl.Hertasning 1 No. 30,</span>
                  </li>
                  <li>
                    <span>Makassar, Indonesia</span>
                  </li>
                  <li>
                    <span>info@dtcacademy.co.id</span>
                  </li>
                </Globalfooter.List>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <div>
                  <span style={{ textTransform: "uppercase", color: "#fff" }}>
                    Social Media
                  </span>
                </div>
                <Flex style={{ marginTop: 20 }}>
                  <div>
                    <a>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        fill="#60cbf1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter icon</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a style={{ marginLeft: 20 }}>
                      <svg
                        role="img"
                        width="24"
                        fill="#50a9ff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook icon</title>
                        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a style={{ marginLeft: 20 }}>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        fill="#ff64a7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram icon</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </Flex>
              </div>
            </Col>
          </Row>
        </Container>
      </Globalfooter>
    </>
  )
}

export default Intro
