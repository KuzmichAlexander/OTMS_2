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
        [HttpPost]
        public ReturnParams Post(InputsParams IP)
        {
            ReturnParams result = CalculateParams.firstStage(IP);
            return result;
        }
    }
}
