import { Calendar, Droplets } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { getWeatherIcon } from "../utils/weatherutils";
import { formatDate, formatTemperature } from "../utils/weatherutils";
export default function WeatherForecast({ forecast, unit }) {
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});
  const dailyItems = Object.values(dailyForecast).slice(0, 5);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
      {/* size */}
      <div className="flex items-center mb-8 space-x-3">
        <div className=" p-2 bg-white/10 rounded-full ">
          <Calendar className="w-6 h-6 text-white/80" />
        </div>
        <h2 className="text-2xl font-bold text-white">5 Day Forecast</h2>
      </div>
      <div className="space-y-4">
        {/* map method logic */}
        {dailyItems.map((item, index) => {
          const iconName = getWeatherIcon(item.weather[0]);
          const IconComponent = LucideIcons[iconName] || LucideIcons.Cloud;
          return (
            <div
              className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10
        transition-all duration-300 group border border-white/10"
              key={item.dt}
            >
              {/* size */}
              <div className="flex items-center space-x-2 flex-1">
                <div className="text-white/90 group-hover:text-white transition-all transform group-hover:scale-110 duration">
                  {/* dynamic icons */}
                  <IconComponent size={40} />
                </div>
                <div className="flex-1 text-white text-xs">
                  <div className="text-white font-semibold text-lg"> </div>
                  {/* conditional date */}
                  {index === 0 ? "Today" : formatDate(item.dt)}
                </div>
                <div className=" text-white/70 text-xs capitalize font-medium">
                  {item.weather[0].description}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-white/60">
                  <Droplets className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">
                    {/* dynamic details */}
                    {Math.round(item.pop * 100)}%
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl">
                    {formatTemperature(item.main.temp_max, unit)}
                  </div>
                  <div className="text-white text-sm font-medium">
                    {formatTemperature(item.main.temp_min, unit)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
