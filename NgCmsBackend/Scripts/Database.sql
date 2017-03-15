USE [NgCms]
GO
/****** Object:  Table [dbo].[tblContent]    Script Date: 2017-03-15 16:09:56 ******/
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
	[PageId] [int] NOT NULL,
 CONSTRAINT [PK_tblElement] PRIMARY KEY CLUSTERED 
(
	[ContentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblPage]    Script Date: 2017-03-15 16:09:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblPage](
	[PageId] [int] IDENTITY(1,1) NOT NULL,
	[Path] [nvarchar](500) NOT NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[Created] [datetime] NOT NULL,
	[Modified] [datetime] NOT NULL,
 CONSTRAINT [PK_tblPage] PRIMARY KEY CLUSTERED 
(
	[PageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblRole]    Script Date: 2017-03-15 16:09:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRole](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
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
/****** Object:  Table [dbo].[tblUser]    Script Date: 2017-03-15 16:09:56 ******/
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
	[Guid] [uniqueidentifier] NOT NULL CONSTRAINT [DF_tblUser_Guid]  DEFAULT (newid()),
 CONSTRAINT [PK_tblUser] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblUserRole]    Script Date: 2017-03-15 16:09:56 ******/
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
ALTER TABLE [dbo].[tblContent] ADD  CONSTRAINT [DF_tblElement_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblContent] ADD  CONSTRAINT [DF_tblContent_Created]  DEFAULT (getdate()) FOR [Created]
GO
ALTER TABLE [dbo].[tblContent] ADD  CONSTRAINT [DF_tblContent_Modified]  DEFAULT (getdate()) FOR [Modified]
GO
ALTER TABLE [dbo].[tblPage] ADD  CONSTRAINT [DF_tblPage_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblPage] ADD  CONSTRAINT [DF_tblPage_Created]  DEFAULT (getdate()) FOR [Created]
GO
ALTER TABLE [dbo].[tblPage] ADD  CONSTRAINT [DF_tblPage_Modified]  DEFAULT (getdate()) FOR [Modified]
GO
ALTER TABLE [dbo].[tblRole] ADD  CONSTRAINT [DF_tblRole_Guid]  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[tblRole] ADD  CONSTRAINT [DF_tblRole_Created]  DEFAULT (getdate()) FOR [Created]
GO
ALTER TABLE [dbo].[tblRole] ADD  CONSTRAINT [DF_tblRole_Modified]  DEFAULT (getdate()) FOR [Modified]
GO
ALTER TABLE [dbo].[tblContent]  WITH CHECK ADD  CONSTRAINT [FK_tblContent_tblPage] FOREIGN KEY([PageId])
REFERENCES [dbo].[tblPage] ([PageId])
GO
ALTER TABLE [dbo].[tblContent] CHECK CONSTRAINT [FK_tblContent_tblPage]
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
