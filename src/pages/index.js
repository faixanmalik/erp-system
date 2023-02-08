import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../pannel/components/dashboard/SalesChart";
import Customer from "../pannel/components/dashboard/Customer";
import TodayOverview from "../pannel/components/dashboard/TodayOverview";
import TopCards from "../pannel/components/dashboard/TopCards";
import Supplier from "../pannel/components/dashboard/Supplier";
import Products from "@/pannel/components/dashboard/Products";


export default function Home() {
  return (
    <>
      <Head>
        <title>ERP System</title>
        <meta name="description" content="Generated by erp system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Customer"
              subtitle="Total Customer"
              amount="12"
              icon="bi bi-people"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Products"
              subtitle="Total Products"
              amount="235"
              icon="bi bi-bag"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="Supplier"
              subtitle="Total Supplier"
              amount="456"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Total Sales"
              amount="$210"
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="12">
            <SalesChart />
          </Col>
        </Row>

        {/***Table ***/}
        <Row>
          <Col lg="6" xxl="8" sm="12">
            <Customer />
          </Col>
          <Col lg="6" xxl="8" sm="12">
            <Products />  
          </Col>
        </Row>

        <Row>
          <Col lg="6" xxl="8" sm="12">
            <Supplier />
          </Col>
          <Col lg="6" xxl="8" sm="12">
          <TodayOverview />
          </Col>
        </Row>


      </div>
      </main>
    </>
  )
}