import { motion } from "framer-motion";
import {
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
} from "lucide-react";

const weather = {
  city: "Chandigarh",
  temperature: "31°C",
  condition: "Sunny",
  humidity: "62%",
  wind: "12 km/h",
  feelsLike: "34°C",
  forecast: [
    {
      day: "Today",
      temp: "31°",
      icon: Sun,
    },
    {
      day: "Tue",
      temp: "29°",
      icon: Cloud,
    },
    {
      day: "Wed",
      temp: "27°",
      icon: CloudRain,
    },
    {
      day: "Thu",
      temp: "30°",
      icon: Sun,
    },
  ],
};

const WeatherWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 p-6 text-white shadow-lg"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Weather
          </h2>

          <p className="text-sm text-sky-100">
            {weather.city}
          </p>
        </div>

        <Sun className="h-14 w-14 text-yellow-300" />
      </div>

      {/* Temperature */}
      <div className="mb-8">
        <h1 className="text-6xl font-bold">
          {weather.temperature}
        </h1>

        <p className="mt-2 text-lg text-sky-100">
          {weather.condition}
        </p>
      </div>

      {/* Weather Info */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <Wind className="mb-2 h-6 w-6" />

          <p className="text-xs text-sky-100">
            Wind
          </p>

          <h4 className="mt-1 font-semibold">
            {weather.wind}
          </h4>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <Droplets className="mb-2 h-6 w-6" />

          <p className="text-xs text-sky-100">
            Humidity
          </p>

          <h4 className="mt-1 font-semibold">
            {weather.humidity}
          </h4>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <Thermometer className="mb-2 h-6 w-6" />

          <p className="text-xs text-sky-100">
            Feels Like
          </p>

          <h4 className="mt-1 font-semibold">
            {weather.feelsLike}
          </h4>
        </div>
      </div>

      {/* Forecast */}
      <div className="grid grid-cols-4 gap-3">
        {weather.forecast.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.day}
              className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm"
            >
              <p className="text-sm font-medium">
                {item.day}
              </p>

              <Icon className="mx-auto my-3 h-8 w-8 text-yellow-300" />

              <p className="font-bold">
                {item.temp}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WeatherWidget;