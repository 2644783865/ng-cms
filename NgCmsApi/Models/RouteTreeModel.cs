using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class RouteTreeModel
    {
        [Required]
        [JsonProperty("guid")]
        public Guid? Guid { get; set; }

        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("parentRouteGuid")]
        public Guid? ParentRouteGuid { get; set; }

        [Required]
        [JsonProperty("generation")]
        public int? Generation { get; set; }
    }
}
