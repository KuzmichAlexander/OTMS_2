using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OTMS_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        // GET: api/Calculator/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(string part)
        {
            return "пер45";
        }

        [HttpPost]
        public ReturnParams Post(InputsParams IP)
        {
            ReturnParams result = CalculateParams.firstStage(IP);
            return result;
        }

        // PUT: api/Calculator/5
        [HttpPut]
        public string Put([FromBody] string value)
        {

            return value;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
