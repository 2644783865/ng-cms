USE [NgCms]
GO
/****** Object:  Table [dbo].[tblContent]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblContent](
	[ContentId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Content] [nvarchar](4000) NOT NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[Created] [datetime] NOT NULL,
	[Modified] [datetime] NOT NULL,
	[RouteId] [int] NOT NULL,
 CONSTRAINT [PK_tblElement] PRIMARY KEY CLUSTERED 
(
	[ContentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblRole]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRole](
	[RoleId] [int] NOT NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Created] [datetime] NOT NULL,
	[Modified] [datetime] NOT NULL,
 CONSTRAINT [PK_tblRole] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblRoute]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRoute](
	[RouteId] [int] IDENTITY(1,1) NOT NULL,
	[Path] [nvarchar](500) NOT NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[Created] [datetime] NOT NULL,
	[Modified] [datetime] NOT NULL,
	[ParentRouteId] [int] NULL,
 CONSTRAINT [PK_tblPage] PRIMARY KEY CLUSTERED 
(
	[RouteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblUser]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUser](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](500) NOT NULL,
	[Created] [datetime] NOT NULL,
	[Modified] [datetime] NOT NULL,
	[Guid] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_tblUser] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblUserRole]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUserRole](
	[RoleId_Fk] [int] NOT NULL,
	[UserId_Fk] [int] NOT NULL,
 CONSTRAINT [PK_tblUserRole] PRIMARY KEY CLUSTERED 
(
	[RoleId_Fk] ASC,
	[UserId_Fk] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[tblContent] ON 

GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (1, N'343434', N'<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><em><strong>Search users2:</strong></em></div>
', N'26be3830-c05c-4e38-8e5f-ff553115e1eb', CAST(N'2017-03-12T03:24:14.730' AS DateTime), CAST(N'2017-03-17T22:20:17.440' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (2, N'testing', N'<p>waddapasd</p>
', N'2251c71f-29cc-438c-b0b3-749c1883fa2f', CAST(N'2017-03-12T03:32:40.353' AS DateTime), CAST(N'2017-03-16T23:36:15.357' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (3, N'testing2', N'<p>maincontent!xxxxxxxxxxxxxx</p>
', N'cce87309-a7dd-4b4f-a1c4-c04b6fd60b57', CAST(N'2017-03-12T03:34:05.030' AS DateTime), CAST(N'2017-03-16T23:16:26.613' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (4, N'testing3', N'<p>Search users:Dasd</p>
', N'd375397d-dc90-4fc3-9527-d9f90780318f', CAST(N'2017-03-12T03:35:08.943' AS DateTime), CAST(N'2017-03-16T23:15:49.997' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (5, N'testing4', N'<p>asdasdasddassssssssssssssssssssssdadsdsdsdaaD</p>
', N'92ef4650-d573-474d-a0d5-6ca6d47ef2d5', CAST(N'2017-03-13T16:50:01.017' AS DateTime), CAST(N'2017-03-16T23:46:58.040' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (6, N'testing5', N'<p>maincontent!xxxxxxxxxxxxxasdasdxasdasd</p>
', N'f5646c69-a388-4849-804f-7938675b9346', CAST(N'2017-03-13T17:32:53.120' AS DateTime), CAST(N'2017-03-16T23:48:26.787' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (7, N'test', N'<p>Search users:sdsXXXssok</p>
', N'47f494f2-0d88-4cf2-b95a-fd3bacdedd0e', CAST(N'2017-03-13T17:50:13.200' AS DateTime), CAST(N'2017-03-16T23:15:53.213' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (8, N'testing6', N'<p>testasadasd</p>
', N'6d18d590-db64-45ef-b4b4-ac1717ebd56f', CAST(N'2017-03-13T17:53:29.650' AS DateTime), CAST(N'2017-03-16T23:37:40.870' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (9, N'h1-home', N'<blockquote>
<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">growltestkkkggZZZasd</div>
</blockquote>
', N'801309d5-948e-4f67-a18b-b72a93c0f57b', CAST(N'2017-03-13T19:14:47.103' AS DateTime), CAST(N'2017-03-18T03:47:37.197' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (10, N'main-content-home', N'<p>sdddxxasdasd</p>
', N'45c3a306-e1b8-459f-a01c-099d68ec8d9f', CAST(N'2017-03-13T21:24:39.333' AS DateTime), CAST(N'2017-03-16T22:59:55.473' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (11, N'secondary-content-home', N'<p>sdddxxxxssssaXsDASDASDasdasdasdsd</p>
', N'2590d252-2c25-4e53-948c-44fe8ddae1a2', CAST(N'2017-03-13T21:25:53.710' AS DateTime), CAST(N'2017-03-16T23:00:39.910' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (12, N'footer-home', N'<p>sdsXssasdsadsaddsasdasdasdsasdasd</p>

<p><strong>dddddd</strong></p>

<blockquote>
<p><strong>sdddd</strong></p>

<h2 style="font-style:italic;"><strong>INEEDAHERO</strong></h2>
</blockquote>
', N'1062b8b5-611e-4143-9f53-0688247d029b', CAST(N'2017-03-13T21:29:12.430' AS DateTime), CAST(N'2017-03-18T03:47:31.323' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (15, N'footer-home2', N'<p>sadsdd</p>
', N'9aff5de3-467b-42cb-8f9c-2cbd5e285807', CAST(N'2017-03-14T21:51:52.363' AS DateTime), CAST(N'2017-03-16T22:58:31.347' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (16, N'footer-home3', N'<p>xzzzzDsadasdasdsssASDDDDDDDDDDsadasddsad</p>
', N'28016fa4-5a33-498d-8fc8-08a6d85a9323', CAST(N'2017-03-15T19:08:21.970' AS DateTime), CAST(N'2017-03-17T20:23:14.820' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (17, N'footer-home5', N'<p>ASD</p>
', N'166dda83-7e8c-4902-96a3-cb9f2a0c91c7', CAST(N'2017-03-16T23:49:09.950' AS DateTime), CAST(N'2017-03-16T23:51:34.933' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (18, N'footer-home6', N'<p>s</p>
', N'61838cda-83a2-4f81-8230-9dca99a829e3', CAST(N'2017-03-16T23:52:10.350' AS DateTime), CAST(N'2017-03-17T00:24:27.047' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (19, N'footer-home8', N'', N'd73c19d8-ebcc-47e7-bade-77d4add946ea', CAST(N'2017-03-16T23:52:10.350' AS DateTime), CAST(N'2017-03-16T23:52:10.350' AS DateTime), 1)
GO
INSERT [dbo].[tblContent] ([ContentId], [Name], [Content], [Guid], [Created], [Modified], [RouteId]) VALUES (20, N'footer-home7', N'', N'e113d988-9de1-4e46-920e-0bdd470c917c', CAST(N'2017-03-16T23:52:10.353' AS DateTime), CAST(N'2017-03-16T23:52:10.353' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[tblContent] OFF
GO
INSERT [dbo].[tblRole] ([RoleId], [Guid], [Name], [Created], [Modified]) VALUES (1, N'79812704-257b-468b-a587-2184bcea3adc', N'Editor', CAST(N'2017-03-08T23:56:20.113' AS DateTime), CAST(N'2017-03-08T23:56:20.113' AS DateTime))
GO
INSERT [dbo].[tblRole] ([RoleId], [Guid], [Name], [Created], [Modified]) VALUES (2, N'e116725b-ea09-499e-9c2d-aed56ce8df5e', N'Admin', CAST(N'2017-03-08T23:56:20.113' AS DateTime), CAST(N'2017-03-08T23:56:20.113' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[tblRoute] ON 

GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (1, N'', N'b43faccd-e41d-40a0-9330-724148b6f1f2', CAST(N'2017-03-14T13:33:11.633' AS DateTime), CAST(N'2017-03-14T13:33:11.633' AS DateTime), NULL)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (2, N'path1', N'b9d5c10f-6a58-498b-8281-a4cd015f6c39', CAST(N'2017-03-20T00:12:54.070' AS DateTime), CAST(N'2017-03-20T00:12:54.070' AS DateTime), 1)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (3, N'path2', N'd8e97092-d964-4ce8-9aa6-a37f1dccccba', CAST(N'2017-03-20T00:12:56.927' AS DateTime), CAST(N'2017-03-20T00:12:56.927' AS DateTime), 1)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (5, N'sub1', N'f3519508-8f1b-4f4a-a0b1-2437f48ef848', CAST(N'2017-03-20T00:57:01.580' AS DateTime), CAST(N'2017-03-20T00:57:01.580' AS DateTime), 2)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (6, N'sub2', N'4e82aaae-a45f-4c91-b39e-ce546b2c26e4', CAST(N'2017-03-20T00:57:06.250' AS DateTime), CAST(N'2017-03-20T00:57:06.250' AS DateTime), 2)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (7, N'sub3', N'6da1475a-e6d9-4ff4-ad55-853dbdb797aa', CAST(N'2017-03-20T00:57:12.860' AS DateTime), CAST(N'2017-03-20T00:57:12.860' AS DateTime), 3)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (8, N'sub4', N'8b856140-b154-46ec-9915-5e3fed02e89c', CAST(N'2017-03-20T00:57:23.527' AS DateTime), CAST(N'2017-03-20T00:57:23.527' AS DateTime), 7)
GO
INSERT [dbo].[tblRoute] ([RouteId], [Path], [Guid], [Created], [Modified], [ParentRouteId]) VALUES (9, N'sub5', N'29623f5c-1c79-48db-b2df-4f7b35901370', CAST(N'2017-03-20T00:57:54.507' AS DateTime), CAST(N'2017-03-20T00:57:54.507' AS DateTime), 8)
GO
SET IDENTITY_INSERT [dbo].[tblRoute] OFF
GO
SET IDENTITY_INSERT [dbo].[tblUser] ON 

GO
INSERT [dbo].[tblUser] ([UserId], [UserName], [Password], [Created], [Modified], [Guid]) VALUES (1, N'vgk@exor.se', N'AEmw33hVNsI51oeQsjDQl2OBHeH//DuVRRj+SNDHN32g4GH/fE/NJ0kVMYO6SbOQcw==', CAST(N'2017-03-09T00:13:21.310' AS DateTime), CAST(N'2017-03-09T00:13:21.663' AS DateTime), N'0af0cced-125f-4f49-ab06-2f8df6edc911')
GO
SET IDENTITY_INSERT [dbo].[tblUser] OFF
GO
INSERT [dbo].[tblUserRole] ([RoleId_Fk], [UserId_Fk]) VALUES (1, 1)
GO
INSERT [dbo].[tblUserRole] ([RoleId_Fk], [UserId_Fk]) VALUES (2, 1)
GO
ALTER TABLE [dbo].[tblContent] ADD  CONSTRAINT [DF_tblElement_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblRole] ADD  CONSTRAINT [DF_tblRole_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblRoute] ADD  CONSTRAINT [DF_tblPage_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblRoute] ADD  CONSTRAINT [DF_tblPage_Created]  DEFAULT (getdate()) FOR [Created]
GO
ALTER TABLE [dbo].[tblRoute] ADD  CONSTRAINT [DF_tblPage_Modified]  DEFAULT (getdate()) FOR [Modified]
GO
ALTER TABLE [dbo].[tblUser] ADD  CONSTRAINT [DF_tblUser_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblContent]  WITH CHECK ADD  CONSTRAINT [FK_tblContent_tblRoute] FOREIGN KEY([RouteId])
REFERENCES [dbo].[tblRoute] ([RouteId])
GO
ALTER TABLE [dbo].[tblContent] CHECK CONSTRAINT [FK_tblContent_tblRoute]
GO
ALTER TABLE [dbo].[tblRoute]  WITH CHECK ADD  CONSTRAINT [FK_tblRoute_tblRoute] FOREIGN KEY([ParentRouteId])
REFERENCES [dbo].[tblRoute] ([RouteId])
GO
ALTER TABLE [dbo].[tblRoute] CHECK CONSTRAINT [FK_tblRoute_tblRoute]
GO
ALTER TABLE [dbo].[tblUserRole]  WITH CHECK ADD  CONSTRAINT [FK_tblUserRole_tblRole] FOREIGN KEY([RoleId_Fk])
REFERENCES [dbo].[tblRole] ([RoleId])
GO
ALTER TABLE [dbo].[tblUserRole] CHECK CONSTRAINT [FK_tblUserRole_tblRole]
GO
ALTER TABLE [dbo].[tblUserRole]  WITH CHECK ADD  CONSTRAINT [FK_tblUserRole_tblUser] FOREIGN KEY([UserId_Fk])
REFERENCES [dbo].[tblUser] ([UserId])
GO
ALTER TABLE [dbo].[tblUserRole] CHECK CONSTRAINT [FK_tblUserRole_tblUser]
GO
/****** Object:  StoredProcedure [dbo].[spRouteTree]    Script Date: 2017-03-22 23:31:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Viktor Gullmark
-- Create date: 2017-03-20
-- Description:	Recursive function to get page-hierarchy
-- =============================================
CREATE PROCEDURE [dbo].[spRouteTree]
AS
BEGIN
	WITH Hierarchy(RouteId, Guid, Path, Generation, ParentId)
	AS
	(
		SELECT RouteId, Guid, Path, 0, ParentRouteId
			FROM tblRoute AS FirstGeneration
			WHERE ParentRouteId IS NULL        
		UNION ALL
		SELECT NextGeneration.RouteId, NextGeneration.Guid, NextGeneration.Path, Parent.Generation + 1, Parent.RouteId
			FROM tblRoute AS NextGeneration
			INNER JOIN Hierarchy AS Parent ON NextGeneration.ParentRouteId = Parent.RouteId    
	)
	SELECT *
    FROM Hierarchy
    OPTION(MAXRECURSION 32767)
END

GO
