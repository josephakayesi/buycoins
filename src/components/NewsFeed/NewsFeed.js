import React, { Component } from 'react'
import'./NewsFeed.css'

const TableRow = ({ row, openQuoteDetails, deleteQuote, admin }) => (
    <tr>
        <th scope='row' onClick={openQuoteDetails}>{row.author}</th>
        <td onClick={openQuoteDetails}>{row.quote}<small id='admin' className='form-text text-muted'>{row.admin.name}</small></td>
        <td>{row.admin._id === admin ? <i className='fa fa-close' onClick={deleteQuote}></i> : ''}</td>
    </tr>
)

const Table = ({ data }) => (
    <table className='table table-hover'>
        <thead>
            <tr className='table-active'>
            </tr>
        </thead>
        <tbody>
            {data.map((row) =>
                <TableRow key={row._id} />
            )}
        </tbody>
    </table>
)

class NewsFeed extends Component {
    constructor() {
        super()

        this.state = {
            newsFeed: [
                {
                    title: 'First ttitle',
                    link: 'firstlink.com',
                    points: 100,
                    author: 'johndoe',
                    comments: 20
                },
                {
                    title: 'Second ttitle',
                    link: 'secondlink.com',
                    points: 70,
                    author: 'rickjames',
                    comments: 3
                },
                {
                    title: 'Third ttitle',
                    link: 'thirdlink.com',
                    points: 85,
                    author: 'thomaspartey',
                    comments: 17
                }
            ]
        }
    }
    render() {
        const news = this.state.newsFeed
        return (
            <div>
                {/* <Table
                    data={news} /> */}

                <table class="table table-hover">
                    {/* <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Column heading</th>
      <th scope="col">Column heading</th>
      <th scope="col">Column heading</th>
    </tr>
  </thead> */}
                    <tbody>
                        <tr class="table-active">
                            <td scope="row" style={{ width: 50 }} className='numbering'>
                                &nbsp;20. <i className="fa fa-sort-up px-1"></i>
                            </td>
                            <td class='headline'>Cruise giant Carnival Corp emits 10 times air pollution of all European cars&nbsp;
                                <a href="#">(ecohustler.com)</a>
                                <small id='sub' className='form-text text-muted'>Something something here</small>
                            </td>
                        </tr>

                        {/* <tr>
                            <th scope="row" style={{ width: 30 }}>2. *</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">3. *</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default NewsFeed