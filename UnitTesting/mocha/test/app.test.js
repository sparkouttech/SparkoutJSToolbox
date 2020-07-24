const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

function add
(a,b){
  return a+b;
}

const requestData = [
  {
    keyword:'',
    status:400
  },
  {
    keyword:'hi',
    status:400
  }
]

describe('user',()=>{

  it('test add',()=>{
    chai.expect(add(1,2)).eqls(3);
  })

  requestData.forEach((data)=>{
    it(`get tes ${JSON.stringify(data)}`,()=>{
      chai.request(app)
      .get('/')
      .query({keyword:data.keyword})
      .end((err,res)=>{
        chai.expect(res.body.status).eqls(data.status);
      })
    })
  })

  it('add test',(done)=>{
    chai.request(app)
    .post('/add')
    .send({ message:'lion' })
    .end((err,res)=>{
      chai.expect(res.body.message).eqls('hi');
      done();
    })
  })

})