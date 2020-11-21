using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTMS_2
{
    public class CalculateParams
    {
        
        static public ReturnParams firstStage(InputsParams IP)
        {
            ReturnParams rp = new ReturnParams();

            rp.PoperechnyiSquare = Math.Round(Math.PI * IP.agregateDiametr * IP.agregateDiametr / 4, 3);
            rp.GasEaten = Math.Round(IP.gasSpeed * rp.PoperechnyiSquare, 3);
            rp.HeatRatio = Math.Round((IP.materialConsumption * IP.averageMaterialEating) / (rp.GasEaten * IP.averageWarmEating), 3);
            rp.FullHightLayar = Math.Round(IP.volumeCoefofWarmReturning * IP.layerHeight * rp.PoperechnyiSquare / (IP.gasSpeed * rp.PoperechnyiSquare * IP.averageWarmEating * 1000), 3);
            rp.HardExpression = Math.Round(1 - rp.HeatRatio * Math.Exp(-1 * (1 - rp.HeatRatio) * rp.FullHightLayar / rp.HeatRatio) , 3);

            List<double> list1 = new List<double>();
            List<double> list2 = new List<double>();
            List<double> list3 = new List<double>();
            List<double> list4 = new List<double>();
            List<double> list5 = new List<double>();
            List<double> list6 = new List<double>();
            List<double> list7 = new List<double>();
            List<double> list8 = new List<double>();

            for(double i = 0; i<=4; i += 0.5)
            {
                double resline1 = Math.Round(IP.volumeCoefofWarmReturning * i / (IP.gasSpeed * IP.averageWarmEating * 1000), 3);
                list1.Add(resline1);

                double resline2 = Math.Round(1 - Math.Exp((rp.HeatRatio - 1) * resline1 / rp.HeatRatio), 3);
                list2.Add(resline2);

                list3.Add(Math.Round(1 - rp.HeatRatio * Math.Exp((rp.HeatRatio - 1) * resline1 / rp.HeatRatio), 3));

                double resline4 = Math.Round(resline2 / (1 - rp.HeatRatio * Math.Exp((rp.HeatRatio - 1) * rp.FullHightLayar / rp.HeatRatio)), 3);
                list4.Add(resline4);

                double resline5 = Math.Round((1 - rp.HeatRatio * Math.Exp((rp.HeatRatio - 1) * (resline1 / rp.HeatRatio))) / (1 - rp.HeatRatio * Math.Exp((rp.HeatRatio - 1) * rp.FullHightLayar / rp.HeatRatio)) , 3);
                list5.Add(resline5);

                double resline6 = Math.Round(IP.startTemperatyreMaterial + (IP.startTemperatyreGas - IP.startTemperatyreMaterial) * resline4, 3);
                list6.Add(resline6);

                double resline7 = Math.Round(IP.startTemperatyreMaterial + (IP.startTemperatyreGas - IP.startTemperatyreMaterial) * resline5, 3);
                list7.Add(resline7);

                double resline8 = Math.Round(Math.Abs(resline6 - resline7), 3);
                list8.Add(resline8);
            }

            rp.line1 = list1;
            rp.line2 = list2;
            rp.line3 = list3;
            rp.line4 = list4;
            rp.line5 = list5;
            rp.line6 = list6;
            rp.line7 = list7;
            rp.line8 = list8;

            return rp;
        }

        

    }
}
