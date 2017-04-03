using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class RouteModel
    {
        [Required]
        [JsonProperty("guid")]
        public Guid Guid { get; set; }

        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("parentRouteGuid")]
        public Guid? ParentRouteGuid { get; set; }
    }
}
