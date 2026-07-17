import { useState } from "react";
import {
  MapPinned,
  LocateFixed,
  MapPin,
  Building2,
  Landmark,
} from "lucide-react";

export default function LocationStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [loadingLocation, setLoadingLocation] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateField(
          "coordinates",
          `${position.coords.latitude}, ${position.coords.longitude}`
        );

        setLoadingLocation(false);
      },
      () => {
        alert("Unable to fetch your current location.");
        setLoadingLocation(false);
      }
    );
  };

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h2 className="text-4xl font-black text-white">
          Complaint Location
        </h2>

        <p className="mt-3 text-slate-400">
          Provide the exact location of the issue.
        </p>

      </div>

      {/* Detect Location */}

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">

              <LocateFixed className="text-white" size={30} />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-white">
                Auto Detect Location
              </h3>

              <p className="mt-2 text-slate-400">
                Use your device GPS to automatically detect your current
                location.
              </p>

            </div>

          </div>

          <button
            onClick={detectLocation}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            {loadingLocation ? "Detecting..." : "Use My Location"}
          </button>

        </div>

      </div>

      {/* Map Placeholder */}

      <div className="flex h-80 items-center justify-center rounded-3xl border border-dashed border-cyan-500/30 bg-slate-900">

        <div className="text-center">

          <MapPinned
            size={70}
            className="mx-auto text-cyan-400"
          />

          <h3 className="mt-5 text-2xl font-bold text-white">
            Google Maps Integration
          </h3>

          <p className="mt-3 text-slate-400">
            Interactive map will appear here after backend integration.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-3 block font-semibold text-white">
            State
          </label>

          <input
            value={formData.state}
            onChange={(e) =>
              updateField("state", e.target.value)
            }
            placeholder="Punjab"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-3 block font-semibold text-white">
            City
          </label>

          <input
            value={formData.city}
            onChange={(e) =>
              updateField("city", e.target.value)
            }
            placeholder="Jalandhar"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-3 block font-semibold text-white">
            PIN Code
          </label>

          <input
            value={formData.pinCode}
            onChange={(e) =>
              updateField("pinCode", e.target.value)
            }
            placeholder="144411"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-3 block font-semibold text-white">
            Landmark
          </label>

          <input
            value={formData.landmark}
            onChange={(e) =>
              updateField("landmark", e.target.value)
            }
            placeholder="Near Government School"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none focus:border-cyan-500"
          />

        </div>

      </div>

      {/* Address */}

      <div>

        <label className="mb-3 block font-semibold text-white">
          Full Address
        </label>

        <textarea
          rows={4}
          value={formData.address}
          onChange={(e) =>
            updateField("address", e.target.value)
          }
          placeholder="Enter complete address..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 p-5 text-white outline-none focus:border-cyan-500"
        />

      </div>

      {/* Coordinates */}

      <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

        <div className="flex items-center gap-3">

          <MapPin className="text-cyan-400" />

          <span className="font-semibold text-white">
            GPS Coordinates
          </span>

        </div>

        <p className="mt-3 break-all text-slate-400">

          {formData.coordinates || "Location not detected yet."}

        </p>

      </div>

      {/* Footer */}

      <div className="flex justify-between border-t border-white/10 pt-8">

        <button
          onClick={prevStep}
          className="rounded-2xl border border-white/10 px-8 py-4 text-white transition hover:bg-slate-800"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Continue
        </button>

      </div>

    </div>
  );
}