import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    CurrentDayCustomer: "197",
    prevDayCustomer: "100"
  }
];

const Customer = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Customer Details</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the Customer Details
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Previous Day Customer</th>
                <th>Current Day Customer</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="">
                        <h6 className="mb-0">{tdata.prevDayCustomer}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.CurrentDayCustomer}</td>
                  <td>
                    {tdata.prevDayCustomer > tdata.CurrentDayCustomer ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                    ) : tdata.prevDayCustomer < tdata.CurrentDayCustomer ? (
                        <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                        ) : (
                            <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />    
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default Customer;